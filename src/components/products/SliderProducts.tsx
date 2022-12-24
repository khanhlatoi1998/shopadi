import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./Product";
import { ProductType } from "../../contains/type";

interface Props {
    sliderProducts?: Array<ProductType>;
}

const SliderProducts: React.FC<Props> = ({
    sliderProducts,
}) => {

    return (
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
                {
                    sliderProducts && sliderProducts.map((item: ProductType, index) => (
                        <SwiperSlide key={item._id}>
                            <Product item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default SliderProducts;