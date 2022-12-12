interface BrandType {
    name: string;
    image: string;
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
                <h1 className="font-bold md:text-title text-title_mb text-center">SHOP BY BRAND</h1>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        dataBrand?.map((item: BrandType, index) => (
                            <div className="brand__item relative pt-[66.7%] cursor-pointer" key={index}>
                                <div className="px-8 py-2 absolute bottom-0 left-[50%] translate-x-[-50%] text-center bg-white">
                                    {item.name}
                                </div>
                                <figure className="absolute top-0 left-0 w-full h-full z-[-1]">
                                    <img className="w-full h-full object-fill" src={item.image} alt="" />
                                </figure>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Brand;