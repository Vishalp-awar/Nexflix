import React from "react";
import Navc from '../Navbar/Navc.css';

function Navbar(){
    return(
        <nav >
            <div className="row Container" > 
            
                  <div className="col" >  
                    <form class="form-inline " >
                    
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                     
                     <img src="/Navbar.png" className="Navlogo" style={{ width: '30%', height: '30%'}}></img>
                    <a href="" className="space" ></a>
                    <a href="login" className="login">SignIn</a>
                    </form>
                    </div>
            </div>  
        </nav>
    );
}

export default Navbar;