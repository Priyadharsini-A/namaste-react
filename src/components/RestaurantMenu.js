import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryList from "./CategoryList";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const[showIndex,setShowIndex]=useState()
  
  
  //console.log("resId:",resId)
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, city } = resInfo?.cards[2]?.card?.card?.info;
  // console.log("name",name)
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (menu) =>
        menu.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log("categories",categories)
  return (
    <div className="text-center bg-green-400">
      <h1 className="mt-4 mb-6 font-bold">{name}</h1>
      <h2 className="font-semibold">
        {areaName},{city}
      </h2>
      {categories.map((data,index) => (
        <CategoryList
          key={data.card.card.name}
          category={data}
          showList={index === showIndex?true:false}
          setShowIndex={(showList)=>{
            
            showList?setShowIndex(null):setShowIndex( index)}
          }
          // collapseAll={()=>{
          //  setShowIndex(null)
          // }}
          
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
