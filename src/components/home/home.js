import axios from 'axios';
import react, { useEffect, useState } from 'react';
const url = "https://notes-event.onrender.com/login/user/event/get"


 function Home(){
    const token = window.localStorage.getItem("token");
    const [events, setEvents] = useState([]);
    async function getData(){
        let auth = {
            headers:{
                "Authorization":token,
                "Content-Type":"application/json, text/plain"
            }
        };
        let data  = await axios.get(url,auth);
    console.log(data.data)
    }
    useEffect(()=>{
        
        getData()
    },[])
    return (
        <div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Add Notes</li>
                    <li>Delete All</li>
                    <li>Export</li>
                </ul>
            </div>
            <div>
                <input type={'search'}/>
            </div>
            <div>
                {/* {events?.map((val,i)=>{
                    <div key={i}>
                        <h1>{val.title}</h1>
                        <h1>{val.description}</h1>
                    </div>

                })} */}
            </div>
        </div>
        )
}

export default Home;