import NavItem from "./NavItem";
import { ItemType } from '../../contains/type/index';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    const items: Array<ItemType> = [
        {
            link: '/',
            label: 'HOME',
            active: true,
        },
        {
            link: '/men',
            label: 'MEN',
            active: false,
            icon: <i className="fa-regular fa-plus"></i>,
            subMenu: [
                { link: '/men/hoodile', label: 'Hoodile' },
                { link: '/men/shirt', label: 'Hoodile' },
            ]
        },
        {
            link: '/womens',
            label: 'WOMENS',
            active: false,
            icon: <i className="fa-regular fa-plus"></i>,
            subMenu: [
                { link: '/womens/preppy', label: 'Preppy style' },
                { link: '/womens/office', label: 'Office' },
            ]
        },
        {
            link: '/shop',
            label: 'SHOP',
            active: false,
            icon: <i className="fa-regular fa-plus"></i>,
            subMenu: [
                { link: '/shop/style', label: 'Preppy style' },
                { link: '/shop/shirt', label: 'Office' },
            ]
        },
        {
            link: '/office',
            label: 'OFFICE WEAR',
            active: false
        },
        {
            link: '/products',
            label: 'PRODUCTS',
            active: false
        },
        {
            link: '/blogs',
            label: 'BLOGS',
            active: false
        },
    ]

    const listCart = useSelector((state: any) => state.listCart);

    const clickCloseMenu = () => {
        setOpen(false);
    };

    return (
        <section className="">
            <div className="lg:flex hidden justify-between items-center px-8 pt-2 pb-3 border-b border-color_07 border-solid bg-white">
                <nav>
                    <i className="fa-solid fa-phone mr-1"></i>
                    <span>Free Support: 123456789</span>
                </nav>
                <nav>
                    <ul className="flex gap-4 items-center">
                        <li>
                            <i className="fa-solid fa-user"></i>
                            <span className="mx-1">My Account</span>
                            <i className="fa-solid fa-angle-down text-[10px]"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-dollar-sign"></i>
                            <span className="mx-1">Currency</span>
                            <i className="fa-solid fa-angle-down text-[10px]"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-language"></i>
                            <span className="mx-1">Language</span>
                            <i className="fa-solid fa-angle-down text-[10px]"></i>
                        </li>
                        <li>
                            <span className="mx-1">Contact Us</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <header className="fixed lg:sticky top-0 inset-x-0 z-50 bg-white">
                <div className="relative px-8 flex items-center justify-between">
                    <div className="py-4">
                        <NavLink to="/">
                            <img src="../images/logo.png" alt="" />
                        </NavLink>
                    </div>
                    <div>
                        <nav>
                            <ul className={`${open ? 'absolute top-[100%] left-0 right-0 bg-white z-10 h-auto' : 'hidden lg:flex'} duration-500 absolute lg:relative flex flex-col lg:flex-row lg:items-center lg:justify-center lg:border-0 border-b border-solid border-color_07 lg:shadow-none shadow-md`}>
                                {
                                    items.map((item, index) => {
                                        return (
                                            <NavItem key={index} item={item} clickCloseMenu={clickCloseMenu} />
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <ul className="flex items-center justify-center gap-4 text-[20px]">
                            <li className="lg:hidden block">
                                <button onClick={() => setOpen(!open)} className="p-2">
                                    <i className="ti-menu"></i>
                                </button>
                            </li>
                            <li>
                                <a href="">
                                    <i className="ti-search"></i>
                                </a>
                            </li>
                            <li>
                                <NavLink to="/cart" className="relative">
                                    <span className="absolute text-white right-0 top-0 bg-black text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full translate-x-[10px] translate-y-[-50%]">
                                        {
                                            listCart.length
                                        }
                                    </span>
                                    <i className="ti-bag"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;