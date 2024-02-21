import React, { useEffect, useState } from 'react'
import { MENU_URL, MENU_URL1 } from './constants';

const useRestaurantMenu = (resId) => {
    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
const data=await fetch(MENU_URL+resId+MENU_URL1);
const json=await data.json();
console.log("menu",json.data)
setResInfo(json.data)
    }
  return resInfo
}

export default useRestaurantMenu
