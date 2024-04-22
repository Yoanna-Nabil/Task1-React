import React from 'react'
import './Portoflio2.css'

export default function Portoflio2(props) {
  return (
    <>
        <div className='col-md-4 text-white'>
         <div className={`div1 ${props.style}`}>
          <p>{props.title}</p>
          <div className={`starr ${props.star}`}></div>
         </div>
        </div>

        


        
    </>
  )
}
