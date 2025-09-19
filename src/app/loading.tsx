import React from 'react'
import { CgSpinnerTwoAlt } from 'react-icons/cg';
function Loading() {
  return (
    <div className='flex h-screen justify-center items-center'>
      
    <CgSpinnerTwoAlt  className='animate-spin text-5xl text-[#B88E2F]'/>
      
      </div>
  )
}

export default Loading