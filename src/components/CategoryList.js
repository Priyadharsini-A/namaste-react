import React, { useState } from 'react'
import ItemList from './ItemList'

const CategoryList = ({category,showList,setShowIndex,collapseAll}) => {
    const showListHandler=()=>{
//   if(showList){
// collapseAll();
// }
// else{
//   setShowIndex();
// }

setShowIndex(showList);
  }   
  return (
    <>
    <div onClick={showListHandler}className='w-6/12 bg-gray-100 shadow-lg p-4  m-auto mb-2'>
        <div  className='flex justify-between font-bold'><span>
      {category.card.card.title} ({category.card.card.itemCards.length})
    </span>
    <span>{"🔽"}</span></div>
    {showList?<div>
        <ItemList item={category.card.card.itemCards}/>
    </div>:""}
    
    </div>
    
    </>
  )
}

export default CategoryList
