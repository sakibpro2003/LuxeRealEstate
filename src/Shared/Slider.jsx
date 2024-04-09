import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg"
          alt=""
        />
      </SwiperSlide>
      
    </Swiper>
    </div>
  );
};

export default Slider;

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// const Slider = () => {
//     return (
//         <Swiper
//       spaceBetween={10}
//       slidesPerView={2}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide><img src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg" alt="" /></SwiperSlide>
//       <SwiperSlide><img src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg" alt="" /></SwiperSlide>
//       <SwiperSlide><img src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg" alt="" /></SwiperSlide>
//       <SwiperSlide><img src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg" alt="" /></SwiperSlide>
//       <SwiperSlide><img src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg" alt="" /></SwiperSlide>

//       ...
//     </Swiper>
//     );
// };

// export default Slider;

// https://i.ibb.co/DrnCfmP/Villa-Belle-Mare-Mauritius-4-Bedrooms.jpg
//
// https://i.ibb.co/B6hbGXL/mostafa-safadel-c-Hj-Axn-Jk-w-Q-unsplash.jpg
// https://i.ibb.co/0MTSxLt/pexels-pixabay-161758.jpg
// https://i.ibb.co/6nC2qpQ/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg
// https://i.ibb.co/ZcXXxxQ/umit-yildirim-d362-E-BDYk-U-unsplash.jpg
