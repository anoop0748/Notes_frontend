import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './event.css';
const url = "https://notes-event.onrender.com/login/user/event/post";
//const url = "http://localhost:5000/login/user/event/post";
const upurl = "https://notes-event.onrender.com/login/user/event/put"
// const upurl = "http://localhost:5000/login/user/event/put"


function AddEvent(props){
    const on_upd = props.up_event
    const token = window.localStorage.getItem('token');
    let  navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [disc,setDisc] = useState("");
    const [ startT, setStartT] = useState("");
    const [ endT, setEndT] = useState("");
    async function add_event(){
        console.log(title,disc,startT,endT)
        if(title.length === 0  || disc.length === 0 || startT.length == 0 || endT.length == 0){
            return alert("Please Fill all filds")
        }
        else{
            let data = {
                title:title,
                discription: disc,
                start_time:startT,
                end_time : endT,
                date :  new Date().toDateString()
            };
            let auth = {
                headers:{
                    "Authorization":token,
                    "Content-Type":"application/json"
                }
                
            };
            console.log(token)
            let res = await axios.post(url,data,auth);
            if(res.data.status === "Successful"){
                navigate('/home')
            }
            else{
                alert(res.data.status)
            }
            
        }
    }
    useEffect(()=>{
        if(!token){
            navigate('/')
        }

    },[token])
    async function update_event(){
        if(title.length === 0  || disc.length === 0 || startT.length == 0 || endT.length == 0){
            return alert("Please Fill all filds")
        }
        else{
            let data = {
                title:title,
                discription: disc,
                start_time:startT,
                end_time : endT,
                date :  new Date().toDateString()
            };
            let auth = {
                headers:{
                    "Authorization":token,
                    "Content-Type":"application/json"
                   
                }
                
            };
            
            let res = await axios.put(upurl,data,auth);
            console.log(res.data.status)
            if(res.data.status == "Successful"){
                navigate('/home')
            }
            else{
                alert(res.data.status)
            }
            
        }

    }

    return(
        <div>
            {on_upd?"":
            <div className='home_heder'>
                <ul className='nav_bar'>
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/event" ><li>Add Notes</li></Link>
                    <li>Delete All</li>
                    <li>Export</li>
                </ul>
            </div>
            }
            <div className='add_notes-cont'>
                <div className='notes_card'>
                    <div className='title_cont'>
                        <label htmlFor='title'><b>Title :</b></label>
                        <input type={"text"} className="title_inp " id="title"  name='title' onBlur={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div className='title_cont'>
                        <label htmlFor="Dis"><b>Discription :</b></label>
                        <textarea  className="desc_inp" id='Dis' onBlur={(e)=>{setDisc(e.target.value)}}></textarea>
                    </div>
                    <div className='time_cont'>
                        <label htmlFor="start_t"> Start Time</label>
                        <input type={'time'} id='start_t' name='start_t' onChange={(e)=>{setStartT(e.target.value)}}/>
                        <label htmlFor="end_t"> End Time</label>
                        <input type={'time'} id='End_t' onChange={(e)=>{setEndT(e.target.value)}} />
                    </div>
                    <div className='title_cont'>
                        {on_upd?<button id='add_event_btn'onClick={()=>{update_event()}}>Add Notes</button>:<button id='add_event_btn'onClick={(e)=>{add_event(e)}}>Add Notes</button>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddEvent;