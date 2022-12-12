import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Product from "../products/Product";

const ListTopProducts = () => {
    return (
        <section className="products">
            <div className="container__main px-8 md:pb-20 pb-12">
                <h1 className="font-bold md:text-title text-title_mb text-center">TOP PRODUCTS</h1>
                <div className="md:mt-12 mt-8 flex justify-center">
                    <a href="#" className="font-medium px-5">FEATURED</a>
                    <a href="#" className="font-medium px-5 border-x border-solid border-color_07">SPECIAL</a>
                    <a href="#" className="font-medium px-5">BESTSELLER</a>
                </div>
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
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default ListTopProducts;