import { LOGO_URL } from "../utils/constants";

const RestaurantCard=({resData})=>{
    
    const{name,avgRating,sla,cuisines,cloudinaryImageId,areaName}=resData.info;

     return(
         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
             <div><img className="logo"src={LOGO_URL+cloudinaryImageId}/></div>
             <div className="card-info">
             <h3 >{name}</h3>
             <h3 ><span className="star" >&#9734; </span> {avgRating}  .{sla.slaString}</h3>
             <h4>{cuisines.join(', ')}</h4>
             <h4>{areaName}</h4>
 
             </div>
            
             
             
 
         </div>
     )
 }
 export default RestaurantCard;