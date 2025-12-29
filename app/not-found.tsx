import React from 'react'

function notfound() {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center mogra flex-col uppercase'>
       <span className='font-semibold text-2xl'>kaha jaana chahte ho ji</span>
       <div> <span className='text-red-400'>404 </span> | blank page henji</div>
       <div className='text-xs opacity-40 pt-10'> redirect yourself to <a href="https://d33pak.space" className="underline">d33pak.space</a> </div>
    </div>
  )
}

export default notfound