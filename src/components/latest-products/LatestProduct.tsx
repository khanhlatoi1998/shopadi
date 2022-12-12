import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Product from "../products/Product";

const Latest = () => {
    return (
        <section className="latest">
            <div className="container__main px-8 md:py-20 py-12">
                <h1 className="font-bold md:text-title text-title_mb text-center">LATEST</h1>
                <div className="mt-8">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 3000
                        }}
                        pagination={{
                            clickable: true,
                            enabled: false
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                            },
                            767: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4
                            } 
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Latest;