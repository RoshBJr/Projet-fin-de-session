import React from 'react'

function loading() {
  return (
    <div className='mt-[120px] mb-40 flex-grow bg-primary flex justify-center'>
        <div className="skeleton w-[80%] h-[80vh]"></div>
    </div>
  )
}

export default loading