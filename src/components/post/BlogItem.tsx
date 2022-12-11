const BlogItem = () => {
    return (
        <div className="mt-8">
            <div>
                <div>
                    <img className="w-full h-full object-cover" src="../images/products/blog_01.jpg" alt="" />
                </div>
                <h3 className="text-size-1 font-bold mt-2">Duis Pulvinar Augue Nisi</h3>
                <div className="mt-4 flex flex-wrap gap-4 items-center">
                    <div className="flex items-center">
                        <span><i className="fa fa-comment"></i></span>
                        <p className="ml-2 mt-[-2px]">1 comments</p>
                    </div>
                    <div className="flex items-center">
                        <i className="ti-calendar"></i>
                        <p className="ml-2 mt-[-2px]">13 Feb 2020</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-text mt-4 pr-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, dolores eos qui ratione voluptatem sequi nesciunt...</p>
                <button className="mt-4">Read more</button>
            </div>
        </div>
    );
};

export default BlogItem;