import { useState } from 'react'


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between  text-sm lg:flex">
        <h1 className=''>Sneakers app</h1>
        <div className="fixed bottom-0 left-0 flex  w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
         filter
        </div>
      </div>

      <div>
        list
      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0  lg:text-right">

      <span>Scroll to top</span>


      </div>
    </main>
  )
}
