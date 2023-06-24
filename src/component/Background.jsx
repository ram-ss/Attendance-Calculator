import React from 'react'
import "./Background.css";
import Form from './Form';
function Background() { 
  return (
    <div className='absolute .blob flex items-center justify-center w-full h-full'>
        <div className='gooey relative top-[-180px] left-[-40px] drop-shadow-2xl'></div>
        <div className='h-[500px] w-[400px] my  bg-transparent 
         absolute border-white top-[50px]'>
            <Form/>
        </div>
    </div>
  )
}

export default Background