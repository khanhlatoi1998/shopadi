const Post = () => {
    return (
        <div className="mt-8 border border-solid border-color_07">
            <div>
                <img src="../images/products/blog_01.jpg" alt="" />
            </div>
            <div className="p-4">
                <p className="font-medium text-[17px]">LOREM IPSUM DOLO</p>
                <p className="mt-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, dolores eos qui ratione voluptatem sequi nesciunt...</p>
                <p className="mt-4 font-medium hover:text-color_01">Read more</p>
            </div>
            <div className="px-4 py-3 bg-color_05 flex flex-wrap gap-4 items-center">
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
    );
};

export default Post;