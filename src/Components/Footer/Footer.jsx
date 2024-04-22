import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
      <div className='container-fluid bg-dark mt-5'>
         <div className='row'>

           <div className='col-md-4 text-white ms-5 mt-5'>
            <div className='sec1'>
              <h5 className='pb-2'>GET IN TOUCH</h5>

              <div className='d-flex'>
              <i class="fa-solid fa-envelope pe-2"></i>
              <p>yoannanabil@gmail.com</p>
              </div>

              <div className='d-flex'>
              <i class="fa-solid fa-phone p-2"></i>
              <p>01220056988</p>
              </div>

            </div>
           </div>

           <div className='col-md-2 text-white mt-5 m-auto'>
            <div className='sec2'>
               <button className='p-2 mt-4 border border-2 border-white bg-transparent text-white'>CONTACT ME</button>
            </div>
           </div>

           <div className='col-md-4 text-white mt-5'>
            <div className='sec3'>
                <div className='d-flex text-white m-4 ms-auto justify-content-center align-items-center gap-4'>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
                <p className=' pp'>copyright@2024kr</p>
            </div>
           </div>

         </div>
      </div>
    </>
  )
}
