import { useEffect, useState } from 'react';

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumb from "../components/breadcrumb";

import productApi from '../api/productsApi';

import Product from "../components/products/Product";
import { useParams } from 'react-router-dom';
import { ProductType } from '../contains/type';

const DetailTemplate = () => {
    const params = useParams();
    const [product, setProduct] = useState<ProductType>();

    useEffect(() => {
        productApi.getItem(params.id)
            .then((res: any) => {
                setProduct(res);
            })
            .catch((err) => { })
    }, []);
    return (
        <section>
            <Breadcrumb title="detail" />
            <div className="container__main">
                <div className="py-16 flex flex-wrap gap-8">
                    <div className="md:w-1/2 w-full">
                        <div className="">
                            <img className="mx-auto w-full max-w-[400px] md:max-w-[600px] h-[500px] object-cover" src={product?.image} alt="" />
                        </div>
                        <div className="detail-slider mt-6 w-full px-6 relative">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={10}
                                navigation={true}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 4
                                    }
                                }}
                                autoplay={{
                                    delay: 5000
                                }}
                            // modules={[Autoplay]}
                            >
                                {
                                    product?.subImage?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div>
                                                <img className="min-h-[150px] w-full object-cover" src={item} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="border-b border-solid border-color_07 pb-8">
                            <p className="text-size-4 font-medium">{product?.name}</p>
                            <div className="flex items-center gap-5 mt-4">
                                <span className="text-color_01">
                                    <i className="ti-star"></i>
                                    <i className="ti-star"></i>
                                    <i className="ti-star"></i>
                                    <i className="ti-star"></i>
                                    <i className="ti-star"></i>
                                </span>
                                <p> 0 reviews</p>
                                <a href="/"><span><i className="fa-solid fa-pen mr-1"></i></span>  Write a review</a>
                            </div>
                            <p className="text-color_01 text-size-4 font-medium mt-4">
                                ${product?.discount != 0 ? product?.discount : product?.price}
                            </p>
                            <form action="" className="mt-2 flex items-center">
                                <div className="number-input">
                                    <button onClick={(e: any) => { e.preventDefault(); e.target.parentNode.querySelector('input[type=number]').stepDown() }} ></button>
                                    <input className="quantity" min="1" name="quantity" defaultValue="1" type="number" />
                                    <button onClick={(e: any) => { e.preventDefault(); e.target.parentNode.querySelector('input[type=number]').stepUp() }} className="plus"></button>
                                </div>
                                <button className="py-2 px-6 ml-4 bg-color_01 rounded-full text-white font-medium">ADD TO CART</button>
                            </form>
                        </div>
                        <div className="text-white text-size-0 mt-6">
                            <button className="bg-[#1877f2] py-[2px] px-2 rounded"><i className="fa-solid fa-thumbs-up"></i> Like {product?.like}</button>
                            <button className="bg-[#1d9bf0] py-[2px] pl-3 pr-2 ml-6 rounded-l-full rounded-r"><i className="ti-twitter"></i> twitter</button>
                            <button className="bg-[#fe6d4c] py-[2px] px-2 rounded"><i className="fa-solid fa-plus"></i> Share</button>
                        </div>
                        <p className="mt-4 opacity-80">INtro</p>
                    </div>
                </div>

                <div>
                    <div className="text-size-1 border-b border-solid border-color_07 cursor-pointer">
                        <p className="hover:text-color_01 px-5 py-1 border-b border-solid border-color_01 inline-block">DESCRIPTION</p>
                        <p className="hover:text-color_01 px-5 py-1 border-b border-solid border-color_01 inline-block">REVIEWS 0</p>
                    </div>
                    {/* <div className="py-5">
                        HTC Touch - in High Definition. Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience you never thought possible. Seductively sleek, the HTC Touch HD provides the next generation of mobile functionality, all at a simple touch. Fully integrated with Windows Mobile Professional 6.1, ultrafast 3.5G, GPS, 5MP camera, plus lots more - all delivered on a breathtakingly crisp 3.8" WVGA touchscreen - you can take control of your mobile world with the HTC Touch HD.

                        Features

                        Processor Qualcomm® MSM 7201A™ 528 MHz
                        Windows Mobile® 6.1 Professional Operating System
                        Memory: 512 MB ROM, 288 MB RAM
                        Dimensions: 115 mm x 62.8 mm x 12 mm / 146.4 grams
                        3.8-inch TFT-LCD flat touch-sensitive screen with 480 x 800 WVGA resolution
                        HSDPA/WCDMA: Europe/Asia: 900/2100 MHz; Up to 2 Mbps up-link and 7.2 Mbps down-link speeds
                        Quad-band GSM/GPRS/EDGE: Europe/Asia: 850/900/1800/1900 MHz (Band frequency, HSUPA availability, and data speed are operator dependent.)
                        Device Control via HTC TouchFLO™ 3D & Touch-sensitive front panel buttons
                        GPS and A-GPS ready
                        Bluetooth® 2.0 with Enhanced Data Rate and A2DP for wireless stereo headsets
                        Wi-Fi®: IEEE 802.11 b/g
                        HTC ExtUSB™ (11-pin mini-USB 2.0)
                        5 megapixel color camera with auto focus
                        VGA CMOS color camera
                        Built-in 3.5 mm audio jack, microphone, speaker, and FM radio
                        Ring tone formats: AAC, AAC+, eAAC+, AMR-NB, AMR-WB, QCP, MP3, WMA, WAV
                        40 polyphonic and standard MIDI format 0 and 1 (SMF)/SP MIDI
                        Rechargeable Lithium-ion or Lithium-ion polymer 1350 mAh battery
                        Expansion Slot: microSD™ memory card (SD 2.0 compatible)
                        AC Adapter Voltage range/frequency: 100 ~ 240V AC, 50/60 Hz DC output: 5V and 1A
                        Special Features: FM Radio, G-Sensor
                    </div> */}
                    <div className="py-5 text-text">
                        <p>There are no reviews for this product.</p>
                        <p className="font-bold text-size-1 mt-2">WRITE A REVIEW</p>
                        <form action="">
                            <div className="mt-6">
                                <label htmlFor=""><span className="text-[#F00]">*</span> Your Name</label>
                                <input className="focus:border-color_01 mt-1 w-full py-2 px-4 border border-solid border-color_07 rounded-full" type="text" name="" id="" />
                            </div>
                            <div className="mt-6">
                                <label htmlFor=""><span className="text-[#F00]">*</span> Your Review</label>
                                <textarea name="" id="" className="mt-1 px-4 py-2 min-h-[100px] w-full border border-solid border-color_07 focus:border-color_01 rounded-lg" />
                            </div>
                            <div className="flex items-center gap-6 mt-6">
                                <label htmlFor=""><span className="text-[#F00]">*</span> Rating</label>
                                <div>
                                    <span className="flex gap-2">
                                        <i className="ti-star cursor-pointer"></i>
                                        <i className="ti-star cursor-pointer"></i>
                                        <i className="ti-star cursor-pointer"></i>
                                        <i className="ti-star cursor-pointer"></i>
                                        <i className="ti-star cursor-pointer"></i>
                                    </span>
                                </div>
                            </div>
                            <button className="bg-color_01 py-2 px-5 text-white mt-4 rounded-full">CONTINUE</button>
                        </form>
                    </div>
                </div>

                <div className="related-product py-12 pb-16">
                    <h3 className="text-center font-bold text-title">RELATED PRODUCTS</h3>
                    <div className="mt-6">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            navigation={true}
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
                            modules={[Autoplay]}
                        >
                            {/* <SwiperSlide>
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
                            </SwiperSlide> */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailTemplate;