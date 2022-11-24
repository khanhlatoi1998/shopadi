import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper";

const Banner = () => {
    return (
        <section className="banner">
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper cursor-pointer"
            >
                <SwiperSlide>
                    <div className="block relative pt-[33.9%]">
                        <div className="absolute w-full h-full top-0 left-0">
                            <picture>
                                <img className="h-full w-full object-fill" src="./images/banner_01.jpg" alt="" />
                            </picture>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="block relative pt-[33.9%]">
                        <div className="absolute w-full h-full top-0 left-0">
                            <picture>
                                <img className="h-full w-full object-fill" src="./images/banner_02.jpg" alt="" />
                            </picture>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="shadow-md">
                <div className="max-w-[1000px] mx-auto px-8 sm:py-8 py-6">
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                        <div className="flex items-center justify-center gap-4 ">
                            <span><i className="ti-truck text-[30px] text-color_01"></i></span>
                            <div>
                                <p className="font-bold">FREE SHIPPING</p>
                                <p>Order Over $99</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 ">
                            <span><i className="ti-loop text-[30px] text-color_01"></i></span>
                            <div>
                                <p className="font-bold">MONEY BACK</p>
                                <p>30 Days Return</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 ">
                            <span><i className="ti-support text-[30px] text-color_01"></i></span>
                            <div>
                                <p className="font-bold">24/7 SUPPORT</p>
                                <p>Dedicated Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Banner;