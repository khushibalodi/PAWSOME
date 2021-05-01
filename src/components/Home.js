import React from 'react';
import logo from "./logoapp.png";

const Home=()=>{
    return (
        <>
        <div className="home">
            <img src={logo} alt="logo" className="mt-4 logoimg"/>
            <div id="homepage-text">Find missing pets and more..</div>
        </div>
         <div>
         <ul className="box-area">
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
         </ul>
       </div>
       </>
    )
}

export default Home;
