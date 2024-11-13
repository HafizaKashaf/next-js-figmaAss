import React from 'react'
import Header from '@/components/Header'



const page = () => {
  return (
    
    <div className='w-[1486px] h-[960.57px]'>
      <Header />
      <div className='w-[1486px] h-[960.56px] bg-[#ffffff] flex '>
          <div className='w-[1271.01px] h-[573.59px]  border-[0.86px 0px 0px 0px] pt-[252.83px] pl-[107.49px] '>
            <div>
              <h1 className='libreBodoni font-bold text-[40px] leading-[65.8px] tracking-wide text-left w-[496px] h-[189px] text-[#000000]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
              </h1>
              <p className='pt-6 libreBodoni w-[798.9px] h-[144px] font-medium text-[30px] leading-[49.35px] tracking-wide text-left text-[#787054]  '>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
              <div className='pt-12'><button className='libreBodoni Fixed w-[288px] h-[58px] p-[10px] gap-[10px] rounded-[10px] bg-[#A29875] text-[#ffffff] font-medium text-[30px] '>Explore Now</button></div>
           </div>
          </div>
          <div className='mt-[198px] '>
            <img src="./images/figma.png"
             alt="hero_image" 
             width={490}
             height={667}
             />
          </div>
         

      </div>
      
    </div>
  )
}

export default page
