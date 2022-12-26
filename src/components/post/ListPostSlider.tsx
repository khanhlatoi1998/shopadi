import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Post from "./PostSlider";
import { PostType } from "../../contains/type";

interface Props {
    sliderPosts: Array<PostType>;
}

const ListPostSlider: React.FC<Props> = ({
    sliderPosts,
}) => {

    return (
        <section className="post py-16">
            <div className="container__main">
                <h1 className="font-bold md:lg:text-title text-size-4 lg:text-title text-size-4_mb text-center">LATEST POST</h1>
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
                    className="cursor-pointer mt-8"
                >
                    {
                        sliderPosts && sliderPosts?.map((item: PostType) => (
                            <SwiperSlide key={item.id}>
                                <Post item={item}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default ListPostSlider;