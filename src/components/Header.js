import { useContext, useState } from "react";
import { CDN_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export const Header=()=>{
const [btnName,setBtnName]=useState("Login")
const onlineStatus=useOnlineStatus();
const {loggedInUser}=useContext(UserContext);
    return(
        <div className="flex justify-between bg-purple-100 shadow-sm m-2">
            <div className="logo-container">
            <img className="w-40" src={CDN_URL}/>
            </div>
            <div className="flex items-center">'
            <ul className="flex p-4 m-4 ">
                <li className="pr-4">Online Status:{onlineStatus?"✅":"🔴"}</li>
               <li className="pr-4"> <Link to="/">Home</Link></li>
                <li className="pr-4"><Link to="/about">About Us</Link></li>
               <li className="pr-4"> <Link to="/contact">Contact Us</Link></li>
               <li className="pr-4"> <Link to="/grocery">Grocery</Link></li>
                 <li className="pr-4">Cart</li>
                 
                 <button className="login-btn pr-4" onClick={()=>
                btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
                 <li className="pr-4 font-bold">{loggedInUser}</li>
                </ul></div>
        </div>
    )
}
export default Header