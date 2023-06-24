import React from 'react'

function Detail({detail}) {
    const {needLecture,days}=detail;
    console.log(needLecture,days);
  return (
    <div className='mt-[10px]'>
        <p>You need total : {needLecture} lectures</p>
        <p>Number of days : {days} days</p>
    </div>
  )
}

export default Detail