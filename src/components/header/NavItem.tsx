import { ItemType } from '../../contains/type/index';

interface Props {
    item: ItemType;
}



const NavItem: React.FC<Props> = (props) => {
    const { item } = props;
    const { link, label, active } = item;

    return (
        <li>
            <a className={`${active ? 'text-color_01' : ''} p-4 font-medium hover:text-color_01`} href={link}>
                {label}
            </a>
        </li>
    )
};

export default NavItem;