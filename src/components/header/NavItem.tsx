import { NavLink } from 'react-router-dom';
import { ItemType } from '../../contains/type/index';

interface Props {
    item: ItemType;
    clickCloseMenu: () => void;
}


const NavItem: React.FC<Props> = ({
    clickCloseMenu,
    item,
    item : { link, label, active, subMenu }
}) => {
    // const { item } = props;
    // const { link, label, active, subMenu } = item;

    return (
        <li className="relative group cursor-pointer flex flex-wrap items-center justify-contents-between lg:border-0 border-t border-solid border-color_07">
            <NavLink onClick={clickCloseMenu} className={`${active ? 'text-color_01' : ''} flex-1 px-4 py-2 lg:py-8  block font-medium hover:text-color_01`} to={link}>
                {label}
            </NavLink>
            {
                subMenu && <span className="lg:hidden px-4 py-2 group-headerItem">
                   {item.icon}
                </span>
            }
            {
                subMenu && <div className="lg:absolute w-full top-[100%] mt-[-1px] pl-4 lg:pl-0 hidden group-hover:block z-10 lg:shadow-subMenu">
                    <ul className="py-2 bg-white min-w-[200px]">
                        {
                            subMenu?.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item relative px-4 flex items-center justify-between  cursor-pointer">
                                        <NavLink onClick={clickCloseMenu} className="block py-1 flex-1" to={item.link}>{item.label}</NavLink>
                                        {
                                            item?.icon && <i className={`${item?.icon} itemChild-hover:text-color_01`}></i>
                                        }
                                        {/* {
                                            item?.childSubMenu && <div className="absolute hidden group-1-hover:block left-[100%] top-0 z-10 shadow-subMenu">
                                                <ul className="py-2 bg-white min-w-[220px]">
                                                    {
                                                        item?.childSubMenu.map((itemChild, index) => {
                                                            return (
                                                                <li key={index} className="px-4">
                                                                    <NavLink to={itemChild.link} className="block py-1">{itemChild.label}</NavLink>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        } */}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </li>
    )
};

export default NavItem;