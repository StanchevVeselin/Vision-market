import { Link } from "react-router-dom";
import "./login.css"
import {auth} from "../../../firebase"
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Login() {
const {loginHandler} = useContext(AuthContext)

const {values, onChange, onSubmit} = useForm(loginHandler, {
    email: "",
    password: ""
})


    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form onSubmit={onSubmit}>
                    <h5 className="h5">E-mail</h5>
                    <input type='text' name="email" value={values.email} onChange={onChange}
                     />

                    <h5 className="h5">Password</h5>
                    <input type='password' name="password" value={values.password} onChange={onChange}
                     />

                    <button type='submit' className='login__signInButton' >Sign In</button>
                </form>

                <p className="privacy">
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' >
                    <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Create your eShop Account
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Login;