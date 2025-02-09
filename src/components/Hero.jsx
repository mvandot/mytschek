import React from 'react'

export const Hero = () => {
  return (
    <section className='w-full h-[794px] flex items-center justify-center bg-[url(../../assets/hero/hero.png)] bg-center bg-no-repeat'>
        <div className='text-center mx-auto flex flex-col'>
            <h1 className='text-6xl font-semibold text-[#928490] md:h-16 bg-opacity-25 rounded md:mt-15 mt-40'>t-shirts in preparation</h1>
            <p className='hidden md:flex justify-center font-light text-3xl mt-5'>Secure yourself the first pieces</p>
            <div className='flex md:flex-row flex-col justify-center md:gap-3'>
              <input class="h-full mx-5 py-3 px-3 min-w-[200px] mt-17 md:w-full bg-transparent placeholder:text-slate-700 text-sm text-slate-800 border-b-3 transition duration-300 ease focus:outline-none focus:border-[#F3E8FC] hover:border-[#F3E8FC]" placeholder="your email address" />
              <a href='#contact' className='px-2 py-2 h-full w-[200px] mt-15 mx-auto border-4 border-[#343434]-100 text-xl transition duration-300 ease focus:outline-none focus:border-[#F3E8FC] hover:border-[#F3E8FC] shadow-sm focus:shadow'>SIGN UP</a>
            </div>
        </div>
    </section>
  )
}




// bg-[#0D5EBA]
// text-[#FFFFFF]

// slate-500
// bg-linear-to-r from-[#F3E8EB] to-[#F3E8FC]
// shadow-sm focus:shadow
