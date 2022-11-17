import React from 'react';
import {Link} from 'react-router-dom';
import img from '../assests/com.jpg';
import video from'../assests/good.mp4'
const Home  = () => {
    return (<>
    <div>
        <h1 style={{color:'orange',textAlign:'center'}}>Complaint Management System</h1>
        <br></br>
          <div className=' row'>
            
            <div className='col'>
            
            <img src={img} alt="hi"style={{height:'80%',width:'80%'}}></img>
            
            </div>
            
          </div>

    </div>
    </>)
};
export default Home ;