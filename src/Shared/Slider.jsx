import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/GtTHDbN/john-fornander-Id7u0-Ek-Tj-BE-unsplash.jpg
            "
            alt=""
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NW09xzk/webaliser-TPTXZd9m-Oo-unsplash.jpg
            "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/ydjNpg9/mehrpouya-h-g4-ENVm-UC4-Zk-unsplash.jpg
            "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/zrtv1ZB/Modern-Luxury-Villa.jpg
            "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/jfdDRbS/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg
            "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/s9Kqgp5/daniel-barnes-Py-Fzyg-P2e-Ng-unsplash.jpg
            "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/mDMT36Q/emmanuel-ikwuegbu-Bd-ZPID68yj-M-unsplash.jpg
            "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/tz9BWVC/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg
            "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/QbWkCk3/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg
            "
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
