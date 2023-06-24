import React, { useState } from 'react'
import Detail from './Detail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function Form() {
    const [formData,setFormData]=useState({
        totalLecture:0,
        absentLecture:0,
        percentage:0,
        dailyLectue:0
    })
    const [detail,setDetail]=useState({
        needLecture:0,
        days:0
    })
    const [load,setLoad]=useState(false);
    function changeHandler(event){
        setLoad(false);
        const {name,value}=event.target;
        setFormData((pre)=>({...pre,[name]:value}));
    }
    function submitHandler(event){
        event.preventDefault();
        setDetail(calculateL(formData));
    }
    function calculateL(formData){
        if(formData.totalLecture===0 || formData.percentage===0 || formData.dailyLectue===0){
            toast.error("Enter all fields");
            return;
        }
        const curPercentage=(formData.totalLecture-formData.absentLecture)/formData.totalLecture*100;
        var xDays=NaN;
        if(curPercentage>=formData.percentage){
            toast.warn("Already maintained");
        }
        else{
            setLoad(true);
            xDays=((formData.totalLecture*formData.percentage)-(curPercentage*100))/(100-formData.percentage);
            toast.success("Output Generated");
        }
        const ele={
            needLecture:Math.ceil(xDays),
            days:Math.ceil(xDays/formData.dailyLectue)
        }
        return ele;
    }
  return (
    <div>
        <div>
            <form onSubmit={submitHandler} className='flex flex-col justify-end w-full h-full gap-10'>
                <div className='flex flex-col'>
                    <label htmlFor="totalLecture" className='text-center'>Total Lecture :</label>
                    <input onChange={changeHandler} type="text" name='totalLecture' id="totalLecture" className=' bg-transparent
                    text-center' 
                    placeholder='Enter total lecture'/>
                    <label htmlFor='absentLecture' className='text-center'>Absent Lecture :</label>
                    <input onChange={changeHandler} type='text' name='absentLecture' id='absentLecture' className=' bg-transparent
                    text-center' 
                    placeholder='Enter absent lecture'/>
                    <label htmlFor="percentage" className='text-center'>Percentage You Need :</label>
                    <input onChange={changeHandler} type="text" name="percentage" id='percentage' className=' bg-transparent
                    text-center' 
                    placeholder='Enter percentage'/>
                    <label htmlFor='dailyLectue' className='text-center'>Daily Lectures :</label>
                    <input onChange={changeHandler} type="text" name='dailyLectue' id='dailyLectue' className='bg-transparent
                    text-center'
                    placeholder='Enter lectures a day' />
                </div>
                <div className='flex items-center justify-center'>
                    <button className='border-2 rounded-md py-1 px-2'>Calculate</button>
                </div>
            </form>
        </div>
        <div>
            {
                load?(<Detail detail={detail}/>):
                (<div></div>)
            }
        </div>
    </div>
  )
}

export default Form