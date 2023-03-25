import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const url = "https://notes-event.onrender.com/login/user"


function Login (){
    let navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function login_user(e){
        e.preventDefault();
        if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))){
            return alert("Please inter valide Email!!")
        }
        let res = await axios.post(url,{
            email:email,
            password:password
        })
        if(res.data.status === "SuccessFull"){
            window.localStorage.setItem('token',res.data.token);
            navigate("/home")
        }
        console.log(res.data.token)
    }
    return (
        <div>
            <div>
            <div>
                <h2>SIGN IN</h2>
            </div>
            <div>
                <label>Email :</label>
                <input type={'email'} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <label>Password</label>
                <input type={'password'} placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div>
                <input type={'checkbox'} />
                <label  > Remember Me</label>
            </div>
            <div>
                <button onClick={(e)=>{login_user(e)}}>Submit</button>
            </div>
            <div>
                <i>Forget password</i>
            </div>
        </div>
        </div>
    )
}


export default Login;