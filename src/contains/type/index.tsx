export interface ItemType {
    link: string;
    label: string;
    active?: boolean;
    icon?: string;
    subMenu?: Array<ItemType>;
    childSubMenu?: Array<ItemType>;
}