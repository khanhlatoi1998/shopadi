import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = () => {
    return (
        <section className="partners md:py-20 py-12 bg-color_05">
            <div className="container__main px-4">
                <h1 className="font-bold md:lg:text-title text-size-4 lg:text-title text-size-4_mb text-center">OUR PARTNERS</h1>
                <div className="mt-4">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 4,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 4,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 6,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <div>
                                <img src="../images/partners/partner_01.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../images/partners/partner_02.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../images/partners/partner_03.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../images/partners/partner_04.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../images/partners/partner_05.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../images/partners/partner_06.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="../images/partners/partner_01.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default Partners;