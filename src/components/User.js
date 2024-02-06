import React, { useState } from 'react'

const User = ({name,city,contact}) => {
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(1);
  return (
    <div className='user-card'>
        <h2>count:{count}</h2>
        <h2>count1:{count1}</h2>
      <h2>Name:{name}</h2>
      <h3>City:{city}</h3>
      <h4>Contact:{contact}</h4>
    </div>
  )
}

export default User
