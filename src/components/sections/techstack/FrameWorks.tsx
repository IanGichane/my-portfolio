import { Icons } from '@/components/icons'
import React from 'react'






const FrameWorks = () => {
  return (
    <div className='wrapper'>
      <div className='item item1 flex items-center justify-center'>
        {/* React */}
        <Icons.react />
      </div>
      <div className='item item2 flex items-center justify-center'>
        {/* Javascript */}
        <Icons.javascript />

      </div>
      <div className='item item3 flex items-center justify-center'>
        {/* Next */}
        <Icons.Next />
      </div>
      <div className='item item4 flex items-center justify-center'>
        {/* css */}
        <Icons.css />
      </div>
      <div className='item item5 flex items-center justify-center'>
        {/* figma */}
        <Icons.figma />
      </div>
      <div className='item item6 flex items-center justify-center'>
        {/* stackoverflow */}
        <Icons.stackoverflow />

      </div>

      <div className='item item7 flex items-center justify-center'>
        {/* canva */}
        <Icons.canva />

      </div>



    </div>
  )
}

export default FrameWorks
