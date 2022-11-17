import React,{ useState } from 'react';
import {Link} from "react-router-dom";

import axios from "axios";
import { useNavigate } from 'react-router-dom'
const AddContact  = () => {
    const [name,setName]=useState('')
    const [photourl,setPhotourl]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [productname,setProductname]=useState('')
    const [description,setDescription]=useState('')
    const [solved,setSolved]=useState('')
    const navigate=useNavigate()
    
    const handleSubmit =async (e) =>{
        e.preventDefault();
        const {data}=await axios.post('http://localhost:8080/signup',{name,photourl,mobile,email,productname,description,solved})
        navigate('/contacts/list')
}
    return (
        <>
        <section className='add-contact p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-success fw-bold">
                            Enter the Complaint
                        </p>
                        <p className='fst-italic'>If there is any complaint. Please fill the form to get quick response!</p>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-4">
                            <form onSubmit={handleSubmit}>
                               <div className="mb-2">
                               <label className="form-label">Name</label> 
                                   <input type="text" className='form-control' value={name} onChange={e => setName(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Complaint PhotoUrl</label> 
                                   <input type="text" className='form-control'  value={photourl} onChange={e => setPhotourl(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Mobile</label> 
                                   <input type="number" className='form-control' value={mobile} onChange={e => setMobile(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Email</label> 
                                   <input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Complaint for</label> 
                                   <input type="text" className='form-control' value={productname} onChange={e => setProductname(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Complaint Description</label> 
                                   <input type="text" className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Feedback</label> 
                                   <input type="text" className='form-control' value={solved} onChange={e => setSolved(e.target.value)}/>
                                </div> 
                                
                                <div className="mb-2">
                                   <input type="submit" className='btn btn-success' value='Create'/>
                                   <Link to={'/contacts/list'} className="btn btn-dark ms-2" >Cancel</Link>
                               
                                </div>   
                            </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};
export default AddContact ;