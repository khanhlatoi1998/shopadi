export interface ItemType {
    link: string;
    label: string;
    active?: boolean;
    icon?: JSX.Element;
    icon_left?: JSX.Element;
    icon_right?: JSX.Element;
    subMenu?: Array<ItemType>;
    childSubMenu?: Array<ItemType>;
}