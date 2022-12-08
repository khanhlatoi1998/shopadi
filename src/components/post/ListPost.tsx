import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper";
import Post from "./Post";

const ListPost = () => {
    return (
        <section className="post py-16">
            <div className="container__main">
                <h1 className="font-bold md:text-title text-title_mb text-center">LATEST POST</h1>
                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 3000
                    }}
                    pagination={{
                        clickable: true,
                        enabled: false
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            // slidesPerGroup: 1,
                        },
                        1040: {
                            slidesPerView: 3
                        }
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                    className="cursor-pointer"
                >
                    <SwiperSlide>
                        <Post />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Post />
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default ListPost;