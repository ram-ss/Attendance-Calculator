import React from 'react'
import Background from './component/Background';
import { ToastContainer } from 'react-toastify';
import Header from './component/Header';

export const App = () => {
  return (
   <div className='w-[100vw] h-[100vh]'>
      <Header/>
      <Background/>
      <ToastContainer/>
   </div>
  )
}
export default App;