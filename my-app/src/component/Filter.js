import React from 'react'
import {useSearchParams} from 'react-router-dom'
export default function Filter() {
    const [searchParams, setSearchParams]=useSearchParams();
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    const age = searchParams.get('age');
    const city = searchParams.get('city');

  return (
    <div>
      <h1>Filter</h1>
      <h3>My age is {age}</h3>
      <h3>City is {city}</h3>
      <input type='text' onChange={(e)=>setSearchParams({text:e.target.value})} placeholder='add text'></input>
      <button onClick={()=>{setSearchParams({age:40})}}>Add age</button>
    </div>
  )
}
