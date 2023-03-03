import { useEffect, useRef, useState } from 'react';

import SwiperCore, { Autoplay, Navigation, Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, type Swiper as SwiperRef } from 'swiper'

import productApi from '../api/productsApi';
import { useParams } from 'react-router-dom';
import { ProductType } from '../contains/type';

import { useDispatch, useSelector } from 'react-redux';
import { Formik, FastField, Form } from 'formik';

import Breadcrumb from "../components/breadcrumb";
import RelatedProducts from '../components/related/RelatedProducts';
import InputRadioFiled from '../components/form/custom-fields/InputRadioFiled';
import InputFiled from '../components/form/custom-fields/InputNumberField';
import { addItem } from '../redux/sliderListCart';
import { hiddenPopupAdded } from '../redux/sliderPopup';
import { url } from 'inspector';

const DetailTemplate = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const refColor = useRef<any>(null);
    const refSize = useRef<any>(null);
    const blockZoomEl = document.getElementsByClassName('zoom-block');
    const imageZoomEl = document.getElementsByClassName('imageZoom');
    const [active, setActive] = useState<number | string>(0);
    const [listRelateProduct, setListRalateProduct] = useState<Array<ProductType>>([]);
    const [product, setProduct] = useState<ProductType>({
        _id: '',
        image: '',
        subImage: [],
        name: '',
        category: '',
        color_group: [],
        size_group: [],
        color: '',
        size: '',
        slug: '',
        price: 0,
        oldPrice: 0,
        rating: 0,
        type: '',
        like: 0,
        view: 0,
        share: 0,
        comment: [],
        quantity: 0,
    });

    const handleActiveCharacteristic = (e: any, ref: any, cls: any) => {
        const eleInput = ref?.current?.querySelectorAll('label');
        eleInput.forEach((ele: any) => {
            ele.classList.remove(cls);
        })
        e.target.classList.add(cls)
    };

    const onSubmit = async (values: ProductType) => {
        dispatch(addItem(values));
        dispatch(hiddenPopupAdded(true));
        setTimeout(() => {
            dispatch(hiddenPopupAdded(false));
        }, 2000);
    };

    const handleZoomMousemove = (event: any) => {
        Array.from(imageZoomEl).forEach((el: any, idx: any) => {
            // create 1 container 1 image main 1 image zoom
            // confirm deviation between  image main and image zoom 
            // transform image zoom fit position mouse and image main
            el.style.opacity = '1';
            const valueScale = 1.5;
            const containerEl: any = blockZoomEl[idx];
            const positonPx = event.clientX - containerEl.getBoundingClientRect().left; // get position mouse in element 
            const positonX = (positonPx / containerEl.offsetWidth); // convert value position mouse in element to %
            const positonPy = event.clientY - containerEl.getBoundingClientRect().top;
            const positonY = (positonPy / containerEl.offsetHeight);
            const getDeviationWidth = ((el.offsetWidth * valueScale) - el.offsetWidth) / valueScale / 2; // get space image when scale whith container 
            const getDeviationHeight = ((el.offsetHeight * valueScale) - el.offsetHeight) / valueScale / 2;
            const translateX = (- ((positonX * getDeviationWidth) * 2)) + getDeviationWidth; // transform position of imageZoom 
            const translateY = (- ((positonY * getDeviationHeight) * 2)) + getDeviationHeight;

            el.style.transform = `scale(${valueScale}) translateX(${translateX}px) translateY(${translateY}px)`;
        });
    };

    const handleZoomMouseout = (event: any) => {
        Array.from(imageZoomEl).forEach((el: any, idx: any) => {
            el.style.opacity = '0';
        });
    };


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        productApi.getItem(params.id)
            .then((res: any) => {
                setProduct(res);
                const category = res.category;
                productApi.getCategoryItems(category)
                    .then((res: any) => {
                        setListRalateProduct(res.data);
                    })
                    .catch((err) => { })
            })
            .catch((err) => { });
    }, []);

    return (
        <section>
            <Breadcrumb title="detail" />
            <div className="container__main" >
                <div className="py-16 flex flex-wrap gap-8">
                    <div className="md:w-1/2 w-full">
                        {
                            product?.subImage?.map((item, index) => (
                                <div
                                    onMouseMove={(e) => handleZoomMousemove(e)}
                                    onMouseOut={(e) => handleZoomMouseout(e)}
                                    style={active === index ? {} : { display: 'none' }}
                                    className="zoom-block relative overflow-hidden cursor-move"
                                    key={index}
                                >
                                    <img className="mx-auto w-full max-w-[400px] md:max-w-[600px] h-[500px] object-fill" src={item} alt="" />
                                    <img
                                        style={active === index ? {} : { display: 'none' }}
                                        className={`imageZoom w-full h-full bg-no-repeat bg-cover`}
                                        src={item} alt=""
                                    />
                                </div>
                            ))
                        }
                        <div className="detail-slider mt-6 w-full px-6 relative">
                            <Swiper
                                className="h-[180px]"
                                onSwiper={(swiper: any) => {
                                    // setActiveThumbs(swiper)
                                }}
                                loop={true}
                                slidesPerView={3}
                                spaceBetween={10}
                                navigation={true}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 4
                                    }
                                }}
                                modules={[Navigation, Thumbs]}
                            >
                                {
                                    product?.subImage?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="h-[100%]" onClick={() => setActive(index)}>
                                                <img className="min-h-[150px] h-[100%] w-full object-fill cursor-pointer" src={item} alt="" />
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
                                ${product?.oldPrice != 0 ? product?.oldPrice : product?.price}
                            </p>
                            <Formik
                                name="form-detailProduct"
                                enableReinitialize={true} // update state 
                                initialValues={product} // get value name of input follow initialValues
                                onSubmit={onSubmit}
                            >
                                {formikProps => {
                                    const { values, errors, touched, isSubmitting } = formikProps;
                                    return (
                                        <Form className="mt-4 flex flex-col gap-4 flex-wrap">
                                            <div>
                                                <p>Màu: </p>
                                                <ul ref={refColor} id="block__color" className="mt-2 flex gap-4">
                                                    {
                                                        product?.color_group?.map((item, idx) =>
                                                            <li key={idx}>
                                                                <FastField
                                                                    name="color"
                                                                    type="radio"
                                                                    className="hidden"

                                                                    item={item}
                                                                    value={values.color}
                                                                    component={InputRadioFiled}
                                                                />
                                                                <label
                                                                    style={{ backgroundColor: `${item.hex}` }}
                                                                    onClick={(e) => handleActiveCharacteristic(e, refColor, 'scale-[1.2]')}
                                                                    htmlFor={item.name}
                                                                    className={`w-[35px] h-[35px] ${item.active ? 'scale-[1.2]' : ''} block cursor-pointer`}>
                                                                </label>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                            <div>
                                                <p>Size: </p>
                                                <ul ref={refSize} id="block__color" className="mt-2 flex gap-4">
                                                    {
                                                        product?.size_group?.map((item, idx) =>
                                                            <li key={idx}>
                                                                <FastField
                                                                    name="size"
                                                                    type="radio"
                                                                    className="hidden"

                                                                    item={item}
                                                                    value={values.size}
                                                                    component={InputRadioFiled}
                                                                />
                                                                <label
                                                                    onClick={(e) => handleActiveCharacteristic(e, refSize, 'border-[black]')}
                                                                    htmlFor={item}
                                                                    className={`w-[35px] h-[35px] border border-solid border-color_07 ${idx === 0 ? 'border-[black]' : ''} flex items-center justify-center cursor-pointer`}
                                                                >
                                                                    {item.name ?? item}
                                                                </label>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                            <div className="flex items-center">
                                                <FastField
                                                    name="quantity"
                                                    min="1"
                                                    type="number"
                                                    className=""
                                                    value={values.quantity}
                                                    component={InputFiled}
                                                >
                                                </FastField>
                                                <button type="submit" className="py-2 px-6 ml-4 bg-color_01 rounded-full text-white font-medium">ADD TO CART</button>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                        <div className="text-white text-size-0 mt-6">
                            <button className="bg-[#1877f2] py-[2px] px-2 rounded"><i className="fa-solid fa-thumbs-up"></i> Like {product?.like}</button>
                            <button className="bg-[#1d9bf0] py-[2px] pl-3 pr-2 ml-6 rounded-l-full rounded-r"><i className="ti-twitter"></i> twitter</button>
                            <button className="bg-[#fe6d4c] py-[2px] px-2 rounded"><i className="fa-solid fa-plus"></i> Share</button>
                        </div>
                        <p className="mt-4 opacity-80">Processor Qualcomm® MSM 7201A™ 528 MHz
                            Windows Mobile® 6.1 Professional Operating System
                            Memory: 512 MB ROM, 288 MB RAM
                            Dimensions: 115 mm x 62.8 mm x 12 mm / 146.4 grams
                            3.8-inch TFT-LCD flat touch-sensitive screen with 480 x 800 WVGA resolution
                            HSDPA/WCDMA: Europe/Asia: 900/2100 MHz; Up to 2 Mbps up-link and 7.2 Mbps down-link speeds
                            Quad-band GSM/GPRS/EDGE: Europe/Asia: 850/900/1800/1900 MHz (Band frequency, HSUPA availability, and data speed are operator dependent.)
                            Device Control via HTC TouchFLO™ 3D & Touch-sensitive front panel buttons
                            GPS and A-GPS ready
                        </p>
                    </div>
                </div>

                <div>
                    <div className="text-size-1 border-b border-solid border-color_07 cursor-pointer">
                        {/* <p className="hover:text-color_01 px-5 py-1 border-b border-solid border-color_01 inline-block">DESCRIPTION</p> */}
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
                    <div className="py-5 pb-0 text-text">
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

                <RelatedProducts sliderProducts={listRelateProduct} />
            </div>
        </section >
    );
};

export default DetailTemplate;