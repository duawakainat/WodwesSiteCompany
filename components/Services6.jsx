import React from 'react'

const Services6 = ({Audience}) => {
  return (
    <div className="relative">

    <div className="flex max-md:flex-col justify-between md:items-center mb-14">
      <div className='max-w-[633px]'>
        <h2 className="text-[30px] tracking-tighter mb-3 font-[700]">
        {Audience}
        </h2>
        
      </div>
      <div>
        <div className="">
          <a className="hover:bg-[#f62c73] text-black hover:text-white border-2 border-[#f62c73] bg-transparent w-[200px] font-[600] py-3 px-5 flex justify-center items-center">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services6