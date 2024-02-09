import { LOGO_URL } from "../utils/constants";

const RestaurantCard=({resData})=>{
    
    const{name,avgRating,sla,cuisines,cloudinaryImageId,areaName}=resData.info;

     return(
         <div className="w-[270px] h-96 bg-gray-100 shadow-lg rounded-lg m-4 overflow-hidden hover:bg-gray-300" >
             <div className="h-40"><img className="rounded-lg w-[94%] h-full m-2" src={LOGO_URL+cloudinaryImageId}/></div>
             <div className="m-4">
             <h3  className="font-bold">{name}</h3>
             <h3 ><span className="star" >&#9734; </span> {avgRating}  .{sla.slaString}</h3>
             <h4>{cuisines.join(', ')}</h4>
             <h4>{areaName}</h4>
 
             </div>
            
             
             
 
         </div>
     )
 }
 export default RestaurantCard;