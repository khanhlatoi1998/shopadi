import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = () => {
    return (
        <section className="partners py-20 bg-color_05">
            <div className="container__main px-4">
                <h1 className="font-bold text-title text-center">OUR PARTNERS</h1>
                <div className="mt-4">
                    <Swiper
                        slidesPerView={6}
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 5000
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