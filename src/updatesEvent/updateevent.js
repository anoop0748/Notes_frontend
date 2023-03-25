import axios from "axios";
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import AddEvent from "../components/addEvent/event";
import './up.css'
 const deleteurl = "https://notes-event.onrender.com/login/user/event/delete"
//const deleteurl = "http://localhost:5000/login/user/event/delete"

function UpdateEvent(props){
    const token = window.localStorage.getItem('token');
    console.log(props.idx,props.data)
    const data = props.data[props.idx];
    const [update_event,set_update_event] = useState(false);
    const navigate = useNavigate()
    let i = props.idx
    async function fun_delete(){
        let auth = {
            headers:{
                "Authorization":token,
                "Content-Type":"application/json",
                "index":i
            }
           
            
        };
        
        let res = await axios.delete(deleteurl,auth);
        if(res.data.status == "Successful")navigate('/home')
        else{
            alert(res.data.status)
        }
    }
    function updateone(){
        set_update_event(true)
    }
    return(
        <>
            {update_event?<AddEvent up_event={update_event} data={data}/>:""}
            <div className="update_cont">
                <div className="width title ">
                    <h2>{data.title}</h2>
                </div>
                <div className="width dis">
                    <h3>{data.date} , {data.start_time}, {data.end_time}</h3>
                    <p>{data.discription}</p>
                </div>
                <div className="btn ">
                    <button onClick={()=>{updateone()}}>Updates</button>
                    <button onClick={()=>{fun_delete()}}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default UpdateEvent;