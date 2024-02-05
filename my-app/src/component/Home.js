import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const navToPage=(url)=>{
    navigate(url)
    
  }
  return (
    <div>
     <h1>Homepage</h1>
     <p>This is our awesome App</p>
     <p>and here i am learning react router dom </p>
     <Link to="/about">Go to About Page</Link>
     <br />
     <button onClick={()=> navToPage('/about')}>Go to About page</button>
     <br />
     <button onClick={()=> navToPage('/filter')}>Go to Filter page</button>
    </div>
  )
}
