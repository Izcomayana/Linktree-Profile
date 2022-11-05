import React from 'react'
import zuri from "../images/zuri-icon.jpg"
import i4g from "../images/I4G.jpg"

export default function Footer() {
  return (
    <>
      <footer>
        <div className='flex flex-col justify-between my-9 mx-auto text-left sm:w-9/12 sm:flex-row'>
          <img src={zuri} alt="zuri-icon" className='w-2/6 sm:w-1/6 sm:h-[10%]' />
          <p className='my-5 text-[1.05rem] text-gray-500 sm:my-0'>HNG Internship 9 Frontend Task</p>
          <img src={i4g} alt="i4g-icon" className='w-2/6 sm:w-1/6 sm:h-[10%]' />
        </div>
      </footer>
    </>
  )
}
