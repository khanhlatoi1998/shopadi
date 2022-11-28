import { ItemType } from '../../contains/type/index';

interface Props {
    item: ItemType;
}


const NavItem: React.FC<Props> = (props) => {
    const { item } = props;
    const { link, label, active, subMenu } = item;

    return (
        <li className="relative group cursor-pointer">
            <a className={`${active ? 'text-color_01' : ''} p-4 py-8 block font-medium hover:text-color_01`} href={link}>
                {label}
            </a>
            {
                subMenu && <div className="absolute top-[100%] group-1 mt-[-1px] hidden group-hover:block z-10 shadow-subMenu">
                    <ul className="py-2 bg-white min-w-[220px]">
                        {
                            subMenu?.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item relative px-4 flex items-center justify-between  cursor-pointer">
                                        <a className="block py-1 flex-1" href={item.link}>{item.label}</a>
                                        {
                                            item?.icon && <i className={`${item?.icon} itemChild-hover:text-color_01`}></i>
                                        }
                                        {
                                            item?.childSubMenu && <div className="absolute hidden group-1-hover:block left-[100%] top-0 z-10 shadow-subMenu">
                                                <ul className="py-2 bg-white min-w-[220px]">
                                                    {
                                                        item?.childSubMenu.map((itemChild, index) => {
                                                            return (
                                                                <li key={index} className="px-4">
                                                                    <a href={itemChild.link} className="block py-1">{itemChild.label}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        }
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