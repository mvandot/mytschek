import React from 'react'

export const Hero = () => {
  return (
    <section className='w-full h-[794px] flex items-center justify-center bg-[url(../../assets/hero/hero.png)] bg-center bg-no-repeat'>
        <div className='text-center mx-auto flex flex-col'>
            <h1 className='text-6xl font-semibold text-[#928490] md:h-16 bg-linear-to-r from-[#F3E8EB] to-[#F3E8FC] bg-opacity-25 rounded mt-15'>t-shirts in preparation</h1>
            <p className='hidden md:flex justify-center font-light text-3xl mt-5'>Secure yourself the first pieces</p>
            <a href='#contact' className='px-2 py-2 mt-15 mx-auto border-4 border-[#343434]-100 text-xl'>GET IN TOUCH</a>
        </div>
    </section>
  )
}




// bg-[#0D5EBA]
// text-[#FFFFFF]
