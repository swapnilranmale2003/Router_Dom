import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
     <h1>Homepage</h1>
     <p>This is our awesome App</p>
     <p>and here i am learning react router dom </p>
     <Link to="/about">Go to About Page</Link>
    </div>
  )
}
