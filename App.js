import React from "react";
import ReactDOM from "react-dom/client";
import { FaUser } from "react-icons/fa";
import logoImage from './images/logo.jpg';
const HeaderComponent=()=>
{
    return(
        
        <header style={{backgroundColor:"aliceblue"}}>
            <div className="flex-container">
                <div><img src={logoImage} height={90} width={100} alt="logo"/></div>
                <div className="search">
                   <div > <input className="search-box"type="text"></input></div>
                    <div><button className="submit-button" type="submit">Search</button></div>
                    </div>
                <div className="usericon"><FaUser /></div>
                   </div>             
            
        </header>
    )
}





const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeaderComponent/>)