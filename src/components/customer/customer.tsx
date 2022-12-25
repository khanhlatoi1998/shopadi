
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import 'swiper/css/bundle';

const Customer = () => {
    SwiperCore.use([Pagination]);
    return (
        <section className="customer bg-color_05 md:py-16 py-12">
            <div className="container__main">
                <h1 className="font-bold md:lg:text-title text-size-4 lg:text-title text-size-4_mb text-center">OUR CUSTOMER SAY</h1>
                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}

                    pagination={{
                        clickable: true,
                        // enabled: false
                    }}

                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <SwiperSlide>
                        <div className="mt-8 mx-auto pb-12 max-w-[600px] px-4 text-[17px]">
                            <div>
                                <img className="rounded-full max-w-[130px] max-h-[130px] mx-auto" src="../images/products/customer_01.jpg" alt="" />
                            </div>
                            <p className="mt-4 opacity-90 text-center italic">"" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters ""</p>
                            <p className="font-bold text-center mt-4">RAMBO</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-8 mx-auto pb-12 max-w-[600px] px-4 text-[17px]">
                            <div>
                                <img className="rounded-full max-w-[130px] max-h-[130px] mx-auto" src="../images/products/customer_01.jpg" alt="" />
                            </div>
                            <p className="mt-4 opacity-90 text-center italic">"" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters ""</p>
                            <p className="font-bold text-center mt-4">RAMBO</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-8 mx-auto pb-12 max-w-[600px] px-4 text-[17px]">
                            <div>
                                <img className="rounded-full max-w-[130px] max-h-[130px] mx-auto" src="../images/products/customer_01.jpg" alt="" />
                            </div>
                            <p className="mt-4 opacity-90 text-center italic">"" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters ""</p>
                            <p className="font-bold text-center mt-4">RAMBO</p>
                        </div>
                    </SwiperSlide>
               
                </Swiper>
            </div>
        </section>
    );
};

export default Customer;