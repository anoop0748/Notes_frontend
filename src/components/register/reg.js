import React, { useState } from "react"
import axios from "axios";
import './reg.css'
import { Link, useNavigate } from "react-router-dom";
const url = "https://notes-event.onrender.com/register/user"

function Register(){
    let navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [con_pass,setConPass] = useState("");
    const [check ,setCheck] = useState("off");
    async function user_register(e){
        if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))){
            return alert("Please inter valide Email!!")
        }
        if(password !== con_pass){
            return alert("Please enter both password Same.")
        }
        if(check !== "on"){
            return alert("Please accept term & conditiona")
        }
        let data = {
            email:email,
            password:password
        }
        let post_data = await axios.post(url,data);
        if(post_data.data.status === "SuccessFull"){
            navigate('/')
        }
        else{
            return alert(post_data.data.status)
        }

        console.log(post_data.data)
        e.preventDefault();
    }

   return(
    <div className="reg_main">
        <div className="reg_card">
            <div >
                <h2>SIGN UP</h2>
            </div>
            <div className="regWidth80">
                <input type={'email'} placeholder="Email" onInput={(e)=>{setEmail(e.target.value)}} className="reginputbox"  />
            </div>
            <div className="regWidth80">
                <input type={'password'} placeholder="Password" onInput={(e)=>{setPassword(e.target.value)}} className="reginputbox"/>
            </div>
            <div className="regWidth80">
                <input type={'password'} placeholder="Confrim Password"  onInput={(e)=>{setConPass(e.target.value)}} className="reginputbox"/> 
            </div>
            <div className="regWidth80">
                <input type={'checkbox'}  onChange={(e)=>{setCheck(e.target.value)}}/>
                <label  > I agree with <b>Terms & conditions.</b></label>
            </div>
            <div className="regWidth80">
                <button onClick={(e)=>{user_register(e)}} className="regbuttons continue">CONTINUE</button>
            </div>
            <div className="regWidth80">
                <Link to={'/'}><button className="regbuttons sign_reg">Alredy Register</button></Link>
            </div>
        </div>
    </div>
   ) 
}

export default Register;