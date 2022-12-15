import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Register() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigateTo = useNavigate();

    const NameChange = (e) =>{
        setName(e.target.value);
    }

    const PasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    const EmailChange = (e) =>{
        setEmail(e.target.value);
    }

    async function SignUp() {
        let item = {name,password,email}
        console.log(item)

        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        console.log("result",result);

        localStorage.setItem("user-info", JSON.stringify(result))
        navigateTo('/add')
    }
    return (
        <div>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h2>Register</h2>
                <input type="text" value={name} className="form-control" onChange={NameChange}  placeholder="Name" />
                <br />
                <input type="password" value={password} className="form-control" onChange={PasswordChange}  placeholder="Password" />
                <br />
                <input type="text" value={email} className="form-control" onChange={EmailChange} placeholder="Email" />
                <br />
                <button onClick={SignUp} className="btn btn-primary">Sign Up</button>
            </div>
        </div>
    )
}

export default Register;