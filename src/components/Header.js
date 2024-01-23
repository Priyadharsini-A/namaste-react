import { useState } from "react";
import { CDN_URL } from "../utils/constants"
export const Header=()=>{
const [btnName,setBtnName]=useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={CDN_URL}/>
            </div>
            <div className="nav-items">'
            <ul className="list-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                {/* <button>Login</button> */}
                <button className="login-btn" onClick={()=>
                btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
                </ul></div>
        </div>
    )
}
export default Header