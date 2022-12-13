import { ItemType } from "../../../contains/type";

interface Props {
    item: ItemType;
}


const ItemMenuSidebar: React.FC<Props> = ({
    item,
}) => {

    return (
        <li className={`${item?.active ? 'text-color_01' : ''} group py-[5px] flex items-center justify-between flex-wrap cursor-pointer`}>
            <div>
                <span className="text-[8px] group-hover:text-color_01">{item.icon_left && item.icon_left}</span>
                <a href="/" className={`${item?.active ? 'text-color_01' : ''} group-hover:text-color_01 ml-2`}>{item.label}</a>
            </div>
            <div>
                <span className="font-bold mr-0 ml-auto inline-block group-hover:text-color_01">{item.icon_right && item.icon_right}</span>
            </div>
            {
                item.subMenu && <ul className="w-full pl-4 mt-1 hidden group-hover:block">
                    {
                        item.subMenu?.map((itemSubMenu, index) => {
                            return (
                                <li className="py-1 hover:text-color_01" key={index}>{itemSubMenu.label}</li>
                            )
                        })
                    }
                </ul>
            }
        </li>
    );
};

export default ItemMenuSidebar;