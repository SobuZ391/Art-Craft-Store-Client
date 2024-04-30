// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperSlides = () => {
    return (
      <div className=" my-6 grid grid-cols-2 h-[40rem] border-2 rounded-xl    ">
     
       <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      className=' h-[80%] w-full m-10   rounded-xl '
      >
   <SwiperSlide><img src="https://royalthaiart.com/wp-content/uploads/2018/05/ocean-art-detail-1-1024x768.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/91y9IrbmrTL.jpg" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.britannica.com/04/181004-050-5AD597EA/Travelers-oil-canvas-collection-Meindert-Hobbema-Washington-1662.jpg" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="https://www.1st-art-gallery.com/cdn-cgi/image/format=webp,quality=85,width=840/media/magefan_blog/The_Hay_Wain_1821.jpg" alt="" /></SwiperSlide>
      </Swiper>
      </div>
    );
};

export default SwiperSlides;