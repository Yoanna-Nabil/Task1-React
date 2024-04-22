import React from 'react'
import './Skills2.css'
export default function Skills2(props) {
  return (
    <>
     

        <div className='d-flex'>
          <h5 className='p-1 props'>{props.title1}</h5>
          <div className=' lines'></div>
        </div>

        <div className='d-flex'>
          <h5 className='p-1 propss'>{props.title2}</h5>
          <div className=' liness'></div>
        </div>

        <div className='d-flex'>
          <h5 className='p-1 props'>{props.title3}</h5>
          <div className=' lines'></div>
        </div>

        <div className='d-flex'>
          <h5 className='p-1 props'>{props.title4}</h5>
          <div className=' lines'></div>
        </div>

       
        
    </>
  )
}
