import React, {useState,useEffect} from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import axios from "axios"
let ViewContact  = () => {
    let { contactId } = useParams();
    
    // const user = JSON.parse(contactId)
    // console.log(user)
    const [user,setUsers]=useState(null)
    const [dis,setDis]=useState(false)
    const getData = async()=>{
        const {data}=await axios.get(`http://localhost:8080/view/${contactId}`)
        console.log(data)
        setUsers(data)
    }
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
            if(user!=null){
                setDis(true)
            }
    },[user])
    
    return (
        <>
        <section className='view-contact-intro'>
            <div className="container">
               <div className="row">
                <div className="col">
                    <p className="h3 text-warning fw-bold align-center " >
                       <p style={{textAlign:'center', color:'red'}}>View Contact</p>
                    </p>
                    <p className='fst-italic'></p>
                </div>
               </div>
            </div>

        </section>
        {dis && 
        <section className='view-contact mt-3'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                       <img src={user.photourl} style={{witdth:"120px",height:"120px"}}></img>
                    </div>
                    <div className="col-md-8">
                    <ul className='list-group'>
                                        <li className='list-group-item list-group-item-action'>
                                            Name: <span className='fw-bold'>{user.name}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Mobile: <span className='fw-bold'>{user.mobile}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Email: <span className='fw-bold'>{user.email}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Complaint For: <span className='fw-bold'>{user.productname}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Description of Complaint: <span className='fw-bold'>{user.description}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Solution: <span className='fw-bold'>{user.solved}</span>
                                        </li>

                                        {/* <li className='list-group-item list-group-item-action'>
                                            Solved or not: <span className='fw-bold'>{user.group}</span>
                                        </li> */}
                                    </ul>
                    </div>

                </div>
                <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
            </div>
            <div className="row pl-20 ml-10">
                <div className="col">
                 
                </div>
            </div>

        </section>
}
        </>
    )
};
export default ViewContact ;