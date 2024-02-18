import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCard=({resData})=>{
    const {loggedInUser}=useContext(UserContext);
    const{name,avgRating,sla,cuisines,cloudinaryImageId,areaName}=resData.info;

     return(
         <div className="w-[270px] h-96 bg-gray-100 shadow-lg rounded-lg m-4 overflow-hidden hover:bg-gray-300" >
             <div className="h-40"><img className="rounded-lg w-[94%] h-full m-2" src={LOGO_URL+cloudinaryImageId}/></div>
             <div className="m-4">
             <h3  className="font-bold">{name}</h3>
             <h3 ><span className="star" >&#9734; </span> {avgRating}  .{sla.slaString}</h3>
             <h4>{cuisines.join(', ')}</h4>
             <h4>{areaName}</h4>
             <p>user:{loggedInUser}</p>
 
             </div>
            
             
             
 
         </div>
     )
 }
 export default RestaurantCard;
 export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
        
        return(
<div>
<label className="absolute  mt-[132px] ml-6 p-1 text-white text-lg font-bold  bg-gradient-to-t from-gray-900 to-transparent ">{props.resData.info.aggregatedDiscountInfoV3.header} {props.resData.info.aggregatedDiscountInfoV3.subHeader}</label>
<RestaurantCard {...props}/>
</div>
        )
        

    }
 }