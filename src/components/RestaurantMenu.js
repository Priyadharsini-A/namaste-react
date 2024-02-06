import React, { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  
  const {resId}=useParams();
  console.log("resId:",resId)

  const resInfo=useRestaurantMenu(resId);
    
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
