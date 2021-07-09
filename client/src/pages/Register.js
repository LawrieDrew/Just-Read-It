import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import {CredentialsContext} from "../App";

function Register() {
    const [name, setName,] = useState("");
    const [username, setUsername,] = useState("");
    const [email, setEmail,] = useState("");
    const [password, setPassword,] = useState("");
    const [, setCredentials] = useContext(CredentialsContext);

    const register = (e) => {
        e.preventDefault();
        fetch('http://localhost:3005/api/user/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                username,
                email,
                password

            })
        }).then(() => {
            setCredentials({
                username,
                password,
            })
            history.push("/");
        })
        
    }

    const history = useHistory();

    return (
        <div>
            <h1>Register</h1>
          
            <form onSubmit={register}>
                <input onChange={(e) => setName(e.target.value)} placeholder="name" />
                <br />
                <input onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <br />
                <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <br /> 
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default Register;