import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UpdateEvent from '../../updatesEvent/updateevent';
import './home.css'
const url = "https://notes-event.onrender.com/login/user/event/get"
 //const url = "http://localhost:5000/login/user/event/get"


 function Home(){
    let navigate = useNavigate()
    const token = window.localStorage.getItem("token");
    const [events, setEvents] = useState([]);
    const [idx,setIdx] = useState(0);
    const [get_update , set_update] = useState(false)
    async function getData(){
        let auth = {
            headers:{
                "Authorization":token,
                "Content-Type":"application/json"
            }
        };
        let data  = await axios.get(url,auth);
        console.log(data.data.data[0].data)
        if(data.status === 200){
            setEvents(data.data.data[0].data)      
        }
    
    }
    useEffect(()=>{
        if(!token){
            navigate('/')
        }
        getData();
    },[])
    function details (i){
        setIdx(i)
        set_update(true)
    }
    
    function logOutfun(){
        window.localStorage.clear();
        navigate('/')
    }
    return (
        <div className='home_main_cont'>
            
           
            <div className='home_heder'>
                <ul className='nav_bar'>
                    <Link to="/home"><li id='homeLink'>Home</li></Link>
                    <Link to="/event"><li id='addnoteLink'>Add Notes</li></Link>
                    <li>Delete All</li>
                    <li>Export</li>
                    <li onClick={()=>{logOutfun()}}>LogOut</li>
                </ul>
            </div>
            {get_update?<UpdateEvent idx={idx} data={events}/>:""}
            {get_update?"":<>
            <div className='search_bar'>
                <input type={'search'} id="serch" placeholder='Search'/>
            </div>
            <div className='main_data_cont'>
                {events?.map((val,i)=>{
                    return(
                        <div className='data_card_cont' key={i} onClick={(e)=>{details(i)}}>
                            <p className='date_time'>{val.date} , {val.start_time}, {val.end_time}</p>
                            <h3 className='title'>{val.title}</h3>
                            <p className='discription'>{val.discription}</p>
                        </div>
                    )
                })}
                
                
            </div>
            </>}
        </div>
        )
}

export default Home;