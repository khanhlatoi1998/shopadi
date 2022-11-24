const Parallax = () => {
    return (
        <section className="min-h-[500px] py-20 bg-[url('../public/images/products/parallax.jpg')] bg-no-repeat">
            <div className="container__main flex justify-end">
                <div className="w-[55%] h-full bg-white py-12 px-10">
                    <div className="">
                        <img className="mx-auto" src="../images/logo.png" alt="" />
                    </div>
                    <p className="mt-8 text-center opacity-90">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="mt-4 text-center opacity-90">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="text-center mt-10">
                        <a href="#" className="bg-color_01 px-10 py-3 rounded-full text-white">SHOP NOW</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Parallax;