import { createContext, useEffect, useState } from "react"
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useStateValue } from "../utils/stateProvider"


export const AuthContext = createContext()

export const Authprovider = ({children}) => {
    const [{basket}, dispatch] = useStateValue()
    const[isMenuOpen, setIsMenuOpen] = useState(false)
    const [state, setAuth] = useState({
        user: "",
        email: "" 
    })

    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user)=> {
            if(user) {
                const email = user.email
                setAuth({
                    user,
                    email
                })
            } else {
                setAuth({
                    user: null,
                    email: ""
                })
            }
        })

        return ()=> unsubscribe()
    }, [])

    const registerHandler = async (values) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, values.email, values.password)
            const user = result.user
            if(user) {
                const token = await user.getIdToken()
                setAuth({
                    user,
                    email: user.email 
                })
                localStorage.setItem("accessToken", token)
                
                navigate("/")
            } else {
                alert("Error: User not created");
            }
        } catch(error) {
            console.log(error);
        }
    }

    const loginHandler = async (values) => {
        try {
            const result = await signInWithEmailAndPassword(auth, values.email, values.password)
            const user = result.user

            if(user) {
                const token = await user.getIdToken()

                setAuth({
                    user,
                    email: user.email
                })

                localStorage.setItem("accessToken", token)
                console.log(user);
                console.log(token);
                console.log(user.email);
                navigate("/")
            } else {
                alert("Loggin working not")
            }
        }catch(err) {
            console.log(err)
        }
    }

    const logoutHandler = async () => {
        try {
            await signOut(auth)

            setAuth({
                user: "",
                email: ""
            })

            localStorage.removeItem("accessToken")
            dispatch({type: "LOGOUT"})
            navigate("/")

            console.log("asdasd");
        } catch(err) {
            console.log(err);
        }
    }

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("clcik");
      };
    
    const menuClose = () => {
        setIsMenuOpen(false);
        console.log(close);
      };

    const values = {
        registerHandler,
        loginHandler,
        logoutHandler,
        menuClose,
        handleClick,
        ...state
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}