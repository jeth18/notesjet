import React from 'react'
import './../css/login.css'
import {useState} from 'react'
import {useLocation, } from 'wouter'
import getUser from './../services/getUser'


const Login = () => {

    const[, setLocation] = useLocation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const res = getUser({username, password});   
        console.log(res)
    }

    return (
    <div className="container">
       <div className="right">
            <h1> NoteJet </h1>
            <p> Una app para guardar tus notas </p>
       </div>
       <div className="left">
            <div id="login">
                <input type="radio" id="toRegister" name="group"/>
                <label htmlFor="toRegister" id="labelRegister">
                Registrarse
                </label>
                <form className="form-login" id="loginForm">
                    <label> Nombre de usuario </label>
                    <input type="text" placeholder="Username"
                        autoComplete="username" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    /> 
                    <label> Contraseña </label>
                    <input type="password" placeholder="password" 
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />  
                    <button type="submit"  onClick={handleSubmitLogin}> Ingresar </button>         
                </form>
            </div>
            <div id="register"> 
                <input type="radio" id="toLogin" name="group" defaultChecked />
                <label htmlFor="toLogin" id="labelLogin">
                Iniciar Sesión
                </label>
                <form className="form-register" id="registerForm">
                    <label> Nombre de usuario </label>
                    <input  type="text" placeholder="Username"
                        autoComplete="username" 
                        required
                    /> 
                    <label> Correo </label>
                    <input  type="email" placeholder="email" 
                        autoComplete="email"
                        required
                    />  
                    <label> Contraseña </label>
                    <input  type="password" placeholder="password" 
                        autoComplete="current-password"
                        required
                    />  
                    <button type="submit"> Registrarse </button>
                </form>
            </div>
       </div>
    </div>
    )
}

export default Login;