import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper";

interface BannerType {
    image: string;
}

interface Props {
    dataBanner: Array<BannerType>;
}

const Banner: React.FC<Props> = ({
    dataBanner
}) => {


    return (
        <section className="banner mt-[76px] lg:mt-0">
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={true}
                autoplay={{
                    delay: 100000
                }}
                pagination={{
                    clickable: true,
                    enabled: false
                }}
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                }}
                modules={[Navigation, Autoplay, Pagination]}
                className="cursor-pointer"
            >
                {
                    dataBanner?.map(
                        (item: BannerType, index) =>
                            <SwiperSlide key={index}>
                                <div className="block top-0  lg:pt-[33.9%] pt-[37%]">
                                    <div className="absolute w-full h-full top-0 left-0">
                                        <picture>
                                            <img className="h-full w-full object-fill" src={item.image} alt="" />
                                        </picture>
                                    </div>
                                </div>
                            </SwiperSlide>)
                }
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