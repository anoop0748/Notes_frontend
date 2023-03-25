import React, { useState } from "react"
import axios from "axios";
const url = "https://notes-event.onrender.com/register/user"

function Register(){
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

        console.log(post_data.data)
        e.preventDefault();
    }

   return(
    <div>
        <div>
            <div>
                <h2>SIGN UP</h2>
            </div>
            <div>
                <input type={'email'} placeholder="Email" onInput={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div>
                <input type={'password'} placeholder="Password" onInput={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div>
                <input type={'password'} placeholder="Confrim Password"  onInput={(e)=>{setConPass(e.target.value)}}/> 
            </div>
            <div>
                <input type={'checkbox'}  onChange={(e)=>{setCheck(e.target.value)}}/>
                <label  > I agree with <b>Terms & conditions.</b></label>
            </div>
            <div>
                <button onClick={(e)=>{user_register(e)}}>CONTINUE</button>
            </div>
        </div>
    </div>
   ) 
}

export default Register;