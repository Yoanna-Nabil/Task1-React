import React from 'react'
import Portoflio2 from '../portoflio2/Portoflio2'

export default function Portofolio() {


  return (
    <>
        
    <div className='container'>
    <h1 className='mt-5'>Potoflio</h1>

    <div className='container ms-5 mt-5'>
      <div className='row gy-5'>

      <Portoflio2 star="w-50 bg-white m-auto" title= "Web Design"/>
      <Portoflio2 star="w-50 bg-white m-auto" style="bg-dark" title= "Mobile Design"/>
      <Portoflio2 star="w-50 bg-white m-auto" title= "Logo Design"/>
      <Portoflio2 style="bg-dark" title= "Web Application Development"/>
      <Portoflio2 title= "Mobile Application Development"/>
      <Portoflio2 style="bg-dark" title= "Pwa Development"/>

      </div>
    </div>

    </div>
    </>
  )
}
