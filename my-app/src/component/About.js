import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
      <h1>Aboutpage</h1>
     <p>This is our awesome App</p>
     <p>and here i am learning react router dom </p>
     <Link to="/">Go to Home Page</Link>
    </div>
  )
}
