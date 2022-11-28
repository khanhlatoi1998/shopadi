const Footer = () => {
    return (
        <footer className="footer">
            <div className="md:py-16 py-8 bg-color_08">
                <div className="container__main">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="px-4">
                            <p className="text-white font-bold text-[17px]">CONTACT INFO</p>
                            <ul className="mt-6 text-color_09 flex flex-col gap-3">
                                <li><i className="fa fa-location-arrow mr-2"></i>71 Pennington Lane Vernon Rockville, CT 06066</li>
                                <li><i className="fa fa-phone mr-2"></i>0123-456-789</li>
                                <li><i className="fa fa-fax mr-2"></i>0123-456-789</li>
                                <li><i className="fa fa-envelope mr-2"></i>theme@demo.com</li>
                            </ul>
                        </div>
                        <div className="px-4">
                            <p className="text-white font-bold text-[17px]">INFORMATION</p>
                            <ul className="mt-6 text-color_09 flex flex-col gap-3">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Delivery Information</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Site Map</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4">
                            <p className="text-white font-bold text-[17px]">EXTRAS</p>
                            <ul className="mt-6 text-color_09 flex flex-col gap-3">
                                <li>
                                    <a href="#">Brands</a>
                                </li>
                                <li>
                                    <a href="#">Gift Certificates</a>
                                </li>
                                <li>
                                    <a href="#">Affiliate</a>
                                </li>
                                <li>
                                    <a href="#">Specials</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4">
                            <p className="text-white font-bold text-[17px]">OUR NEWSLETTER</p>
                            <div className="mt-6">
                                <p className="text-color_09">Sign up for our newsletter to get the latest news, announcements and special.</p>
                                <div>
                                    <input className="px-5 py-3 mt-4 rounded-full w-full" type="text" placeholder="Enter Email Address..." />
                                    <button className="py-3 px-7 text-white mt-5 bg-color_01 rounded-full">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 bg-color_10">
                <div className="container__main">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="">
                            <p className="text-white md:text-left text-center">Powered By OpenCart Your Store © 2022</p>

                        </div>
                        <ul className=" text-color_12 flex md:mt-0 mt-4 md:justify-end justify-center gap-2">
                            <li>
                                <a href="#" className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-color_11"><i className="fa-brands fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#" className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-color_11"><i className="fa-brands fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-color_11"><i className="fa-brands fa-google-plus-g"></i></a>
                            </li>
                            <li>
                                <a href="#" className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-color_11"><i className="fa-brands fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href="#" className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-color_11"><i className="fa-brands fa-pinterest-p"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;