interface BrandType {
    name: string;
    image: string;
    isShow: boolean;
};

interface Props {
    dataBrand: Array<BrandType>;
};

const Brand: React.FC<Props> = ({
    dataBrand
}) => {

    return (
        <section className="">
            <div className="container__main px-12 md:py-20 py-12">
                <h1 className="font-bold md:lg:text-title text-size-4 lg:text-title text-size-4_mb text-center">SHOP BY BRAND</h1>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        dataBrand?.filter((item, idx) => item.isShow === true).splice(0, 3).map((item: BrandType, index) => {    
                            return (
                                item.isShow && <div className="brand__item relative pt-[66.7%] cursor-pointer" key={index}>
                                    <div className="px-8 py-2 absolute bottom-0 left-[50%] translate-x-[-50%] text-center bg-white">
                                        {item.name}
                                    </div>
                                    <figure className="absolute top-0 left-0 w-full h-full z-[-1]">
                                        <img className="w-full h-full object-fill" src={item.image} alt="" />
                                    </figure>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Brand;