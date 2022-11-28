import NavItem from "./NavItem";
import { ItemType } from '../../contains/type/index';

const Header = () => {

    const items: Array<ItemType> = [
        {
            link: '/',
            label: 'HOME',
            active: true,
        },
        {
            link: '/',
            label: 'MEN',
            active: false,
            subMenu: [
                { link: '/', label: 'Hoodile' },
                { link: '/', label: 'Hoodile' },
            ]
        },
        {
            link: '/',
            label: 'WOMENS',
            active: false,
            subMenu: [
                // {
                //     link: '/',
                //     label: 'Modest fashion',
                //     childSubMenu: [
                //         { link: '/', label: 'Baby Suit' },
                //         { link: '/', label: 'Baby Suit' },
                //         { link: '/', label: 'Baby Suit' },
                //         { link: '/', label: 'Baby Suit' },
                //     ],
                //     icon: 'fa fa-angle-right'
                // },
                { link: '/', label: 'Preppy style' },
                { link: '/', label: 'Office'},
            ]
        },
        {
            link: '/',
            label: 'SHOP',
            active: false,
            subMenu: [
                // {
                //     link: '/',
                //     label: 'Modest fashion',
                //     childSubMenu: [
                //         { link: '/', label: 'Baby Suit' },
                //         { link: '/', label: 'Baby Suit' },
                //         { link: '/', label: 'Baby Suit' },
                //         { link: '/', label: 'Baby Suit' },
                //     ],
                //     icon: 'fa fa-angle-right'
                // },
                { link: '/', label: 'Preppy style' },
                { link: '/', label: 'Office'},
            ]
        },
        {
            link: '/',
            label: 'OFFICE WEAR',
            active: false
        },
        {
            link: '/',
            label: 'PRODUCTS',
            active: false
        },
        {
            link: '/',
            label: 'BLOGS',
            active: false
        },
    ]


    return (
        <section>
            <div className="md:flex hidden justify-between items-center px-8 pt-2 pb-3 border-b border-color_07 border-solid">
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
            <header>
                <div className="px-8 flex items-center justify-between">
                    <div>
                        <a href="/">
                            <img src="../images/logo.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <nav>
                            <ul className="flex items-center justify-center">
                                {
                                    items.map((item, index) => {
                                        return (
                                            <NavItem key={index} item={item} />
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <ul className="flex items-center justify-center gap-4 text-[20px]">
                            <li>
                                <a href="">
                                    <i className="ti-search"></i>
                                </a>
                            </li>
                            <li>
                                <a href="" className="relative">
                                    <span className="absolute text-white right-0 top-0 bg-black text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full translate-x-[10px] translate-y-[-50%]">
                                        12
                                    </span>
                                    <i className="ti-bag"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;