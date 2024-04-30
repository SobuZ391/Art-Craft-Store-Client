
import { Typewriter } from 'react-simple-typewriter'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { StaticImage } from 'gatsby-plugin-image';
const Banner = () => {
    
    <div className="w-[95%] h-[600px] mt-2 mx-auto bg-cover bg-center  rounded-xl flex justify-center flex-col items-start lg:px-28  px-10 gap-7 z-20   ">
         <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
      
      <div>
        
        <StaticImage src="https://i.ytimg.com/vi/l-66JCcn5i8/maxresdefault.jpg"  layout="fixed"
      width={200}
      height={200} />
      </div>
      
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </div>
 
 

    return (
        <>
        
        </>
    );
};


export default Banner;