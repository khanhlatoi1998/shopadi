import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Product from "../products/Product";

const Latest = () => {
    return (
        <section className="latest">
            <div className="container__main px-8 py-20">
                <h1 className="font-bold text-title text-center">LATEST</h1>
                <div className="mt-8">
                    <Swiper
                        slidesPerView={4}
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
                            500: {

                            },
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
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