import React, { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';
import { MENU_URL1 } from '../utils/constants';
const RestaurantMenu = () => {
  const[resInfo,setResInfo]=useState(null)
  const {resId}=useParams();
  console.log("resId:",resId)
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu=async()=>{
        const data= await fetch(MENU_URL+resId+MENU_URL1);
        const json=await data.json();
                setResInfo(json.data)
       
        
    }
    if(resInfo===null)return <Shimmer/>
    
    const {name,areaName,city}=resInfo?.cards[0]?.card?.card?.info
    console.log(name)
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
  return (
    <div>
      <h1>{name}</h1>
      <h2>{areaName},{city}</h2>
      <ul>
        {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}</li>)}
      </ul>
 
    </div>
  )
}

export default RestaurantMenu
