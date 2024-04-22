import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
      <div className='container mt-5'>
       <div className='row'>
         <div className='col-md-4'>
          <div className='about'>
           <h1>About me</h1>
          </div>
         </div>

         <div className='col-md-8'>
            <div className='about2'>
            <p className='fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia pariatur, distinctio officiis optio quas fuga deleniti natus. Quas molestiae alias impedit? Animi impedit tenetur fugit voluptatem ab, enim perspiciatis veritatis doloribus voluptatum, expedita at omnis recusandae facilis modi dolores fugiat. Autem delectus nemo asperiores unde culpa voluptatibus sint ipsam porro!</p>
            <button className='btn1 mt-3 p-3 bg-black text-white'>Download Resume</button>
            </div>
         </div>
       </div>
      </div>
    </>
  )
}
