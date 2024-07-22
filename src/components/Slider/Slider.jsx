import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';
import {SliderProducts} from '../../data/products';
import css from './Slider.module.css';

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const Slider = () => {
  return (
    <div className='s-container'>
        
        <Swiper
            breakpoints={{
                640:{
                    slidesPerView:2
                },
                0:{
                    slidesPerView:1
                },
            }}
            modules={[Pagination, Navigation]}
            className={css.mySwiper}
            navigation={true}
            loopFillGroupWithBlank={true}
            slidesPerView={2}
            spaceBetween={40}
            slidesPerGroup={1}
            loop={true}
        >
            {SliderProducts.map((slide,index)=>(
                <SwiperSlide >
                    <div className={css.swiper_slide}>
                        <div className={css.left_s} key={index}>
                            <div className={css.name}>
                                <span>
                                    {slide.name}
                                </span>
                                <span>{slide.detail}</span>
                            </div>
                            <span>${slide.price}</span>
                            <div>Shop now</div>
                            
                        </div>
                        <img src={slide.img} alt="product" className={css.img_p}/>
                    </div>
                </SwiperSlide>
            ))}
            
            
        </Swiper>

    </div>
  )
}
export default Slider