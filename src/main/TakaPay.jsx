import React from 'react'
import Header from './Header'

export default function TakaPay({setPage}) {
  return (
    <div>
        <Header title="Taka Pay"/> 
        <div>
            This is taka pay page
        </div>
        <button  onClick={() => setPage(0)}>Back</button>
    </div>
  )
}
