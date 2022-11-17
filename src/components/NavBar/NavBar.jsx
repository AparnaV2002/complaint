import React from 'react';
import {Link} from 'react-router-dom';
let NavBar = () => {
    return (
        <>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <div className="container"> 
            <Link to={'/'} className="navbar-brand">
                <i className="fa fa-comments text-warning"/>  COMPLAINT  <span className="text-warning ">MANAGEMENT</span> </Link>
             </div>
             
             <Link to={'/contacts/add'} className="btn btn-dark ms-2 text-primary" ><i class="fa fa-plus" aria-hidden="true"> Register</i></Link>
             <Link to={'/contacts/list'} className="btn btn-dark ms-2 text-danger" ><i class="fa-sharp fa-solid fa-eye"> View Complaints</i></Link>
        </nav>
        </>
    )
};
export default NavBar;