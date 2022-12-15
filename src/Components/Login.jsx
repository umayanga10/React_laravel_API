import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

   async function Login () {
        let item = {email,password};
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method: "POST",
            headers : {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        navigateTo('/add')

    }

    return(
        <div>
            <Header />
            <h2>Login</h2>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="emal" onChange={handleEmail} className="form-control"/>
                <br/>
                <input type="text" placeholder="password" onChange={handlePassword} className="form-control"/>
                <br/>
                <button onClick={Login} className="btn btn-primary">Login</button>
            </div>
        </div>
     
    )
}

export default Login;