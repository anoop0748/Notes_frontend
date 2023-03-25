import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import './login.css'
 const url = "https://notes-event.onrender.com/login/user"
 // const url = "http://localhost:5000/login/user"


function Login (){
    let navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function login_user(e){
        e.preventDefault();
        if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))){
            return alert("Please inter valide Email!!")
        }
        let data = {
            email:email,
            password:password
        }
        let res = await axios.post(url,data)
        if(res.data.status === "SuccessFull"){
            window.localStorage.setItem('token',res.data.token);
            navigate("/home")
        }
        console.log(res.data.token)
    }
    return (
        <div className="login_cont">
            <div className="login_card_cont">
            <div>
                <h2>SIGN IN</h2>
            </div>
            <div className="width80">
                <label>Email :</label>
                <input type={'email'} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} className="inputbox"/>
            </div>
            <div className="width80">
                <label>Password</label>
                <input type={'password'} placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}  className="inputbox"/>
            </div>
            <div className="width80">
                <input type={'checkbox'} />
                <label  > Remember Me</label>
            </div>
            <div className="width80">
                <button onClick={(e)=>{login_user(e)}} className="buttons sign_color" >Submit</button>
            </div>
            <div className="blue_color">
                <i>Forget password</i>
            </div>
            <div className="width80">
                <Link to={'/register'}><button className="buttons reg_color">Register</button></Link>
            </div>
        </div>
        </div>
    )
}


export default Login;