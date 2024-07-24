import { Link } from "react-router-dom";
import "./register.css"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm } from "../../hooks/useForm";

function Register() {
  const {registerHandler} = useContext(AuthContext)

  const {values,onChange,onSubmit} = useForm(registerHandler, {
    email: "",
    password: "",
    repassword: ""
  })

  
    return (
        <div className='register'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="register__logo">
                    {/* <StorefrontIcon className="login__logoImage" fontSize="large" /> */}
                    <h2 className="register__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='register__container'>
                <h1>Create your Account</h1>

                <form onSubmit={onSubmit}> 
                    <h5 className="h5">E-mail</h5>
                    <input type='text' name="email" value={values.email}  onChange={onChange}
                     />

                    <h5 className="h5">Password</h5>
                    <input type='password' name="password" value={values.password}  onChange={onChange}
                     />

                    <h5 className="h5">Repeat your password</h5>
                    <input type='password' name="repassword" value={values.repassword}  onChange={onChange}
                     />

                    <button type='submit' className='register__signInButton' >Create Account</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='register__registerButton' >Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Register;