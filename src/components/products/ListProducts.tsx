import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Product from "./Product";

const ListProducts = () => {
    return (
        <section className="products">
            <div className="container__main px-8 pb-20">
                <h1 className="font-bold text-title text-center">TOP PRODUCTS</h1>
                <div className="mt-12 flex justify-center">
                    <a href="#" className="font-medium px-5">FEATURED</a>
                    <a href="#" className="font-medium px-5 border-x border-solid border-color_07">SPECIAL</a>
                    <a href="#" className="font-medium px-5">BESTSELLER</a>
                </div>
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
    )
};

export default ListProducts;