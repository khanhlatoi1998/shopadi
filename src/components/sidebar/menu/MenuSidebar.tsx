import { ItemType } from "../../../contains/type";
import ItemMenuSidebar from "./ItemMenuSidebar";

const MenuSidebar = () => {

    const item: Array<ItemType> = [
        {
            label: 'Men',
            link: '/',
            active: true,
            icon_left: <i className="ti-angle-right"></i>,
            icon_right: <i className="fa-regular fa-plus"></i>,
            subMenu: [
                { label: '', link: '' }
            ]
        },
        {
            label: 'Womens',
            link: '/',
            icon_left: <i className="ti-angle-right"></i>,
            icon_right: <i className="fa-regular fa-plus"></i>,
            subMenu: [
                { label: 'khanh', link: '' },
                { label: 'khanh', link: '' },
                { label: 'khanh', link: '' },
            ]
        },
        {
            label: 'Shop',
            link: '/',
            icon_left: <i className="ti-angle-right"></i>,
            subMenu: [
                { label: 'khanh', link: '' },
                { label: 'khanh', link: '' },
                { label: 'khanh', link: '' },
            ]
        },
        {
            label: 'Office wear',
            link: '/',
            icon_left: <i className="ti-angle-right"></i>,
        },
        {
            label: 'Products',
            link: '/',
            icon_left: <i className="ti-angle-right"></i>,
        }
    ];

    return (
        <div className="border-b border-solid border-color_07">
            <p className="font-bold text-lg">SHOP NAVIGATION</p>
            <ul className="py-6">
                {
                    item?.map((item, index) => {
                        return (
                            <ItemMenuSidebar item={item} key={index} />
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default MenuSidebar;