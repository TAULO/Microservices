import "./Login.css"
import "../Signup/Signup"
import LoggedIn from "./LoggedIn";
import { useNavigate } from 'react-router';

import React, {useState} from "react";

function Login() {
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    return (
        <div class="login_form">
            <input id="username" placeholder="username"></input>
            <input id="password" placeholder="password" type="password"></input>
            <button onClick={login}>login</button>
        </div>
    );

    async function login(event) {    
        event.preventDefault();
        let data = {credential: document.getElementById("username").value, password: document.getElementById("password").value}
        console.log(data)
        const response = await fetch("http://localhost:9001/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })  
    
        if (response.status !== 200) {
            throw new Error("status code: " + response.status)   
        } else {
            navigate("/loggedin");
            return await response.json();
        }
    }
}



export default Login;