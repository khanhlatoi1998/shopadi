const SortTemplate = () => {
    return (
        <div className="py-6 border-y border-solid border-color_07">
            <div className="flex flex-wrap items-center justify-between">
                <div className="text-size-1">
                    <span className="text-color_01"><i className="ti-layout-grid3"></i></span>
                    <span className="ml-4"><i className="ti-view-list-alt"></i></span>
                </div>
                <form className="flex items-center gap-4 flex-wrap">
                    <div >
                        <label htmlFor="">Sort By:</label>
                        <select name="" id="" className="ml-4 border text-size-0 border-solid py-2 pl-1 min-w-[100px] rounded border-color_07">
                            <option value="">Default</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>

                    </div>
                    <div>
                        <label htmlFor="">Show:</label>
                        <select name="" id="" className="ml-4 border text-size-0 border-solid py-2 pl-1 rounded min-w-[50px] border-color_07">
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SortTemplate;