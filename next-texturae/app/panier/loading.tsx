import React from 'react'

function loading() {
  return (
    <div className='mt-[120px] flex-grow bg-alice-blue flex justify-center'>
        <div className="skeleton w-[80%] h-[80vh]"></div>
    </div>
  )
}

export default loading