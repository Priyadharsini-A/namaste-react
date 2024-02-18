import React from "react";
import { DISH_URL } from "../utils/constants";

const ItemList = ({ category }) => {

  const item = category.card.card.itemCards;
 

  return (
    <div>
      {item.map((data) => (
        <div className="p-2 m-2 text-left flex justify-between border-b-2">
          <div className="w-9/12">
             <div className="py-2"><span>{data.card.info.name}</span>
             <span> - ₹ {data.card.info.price / 100}</span>
             </div>
            
            <p className="text-xs">{data.card.info.description}</p>
          </div>{data.card.info.imageId?
          <div className="w-3/12 p-4 ">
            <div className="absolute"><button className="bg-white mx-10 p-2 rounded-lg">Add +</button></div>
          <img src={DISH_URL+data.card.info.imageId} className="w-full rounded-lg"/>
          
          </div>:""
        }
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;