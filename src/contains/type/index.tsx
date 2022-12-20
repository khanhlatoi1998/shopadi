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

export interface ProductType {
    _id: string;
    image: string;
    subImage?: Array<string>;
    name: string;
    category: string;
    color?: string;
    slug: string;
    price: number | string;
    discount: number | string;
    rating: number | string;
    type?: string;
    like: number;
    view: number;
    share: number;
    comment?: [];
    quantity: number;
}

export interface PostType {
    id: string;
    image: string;
    title: string;
    desc: string;
    slug: string;
    comment: Array<any>;
    view: number;
    share: number;
    createDate: string;
}

export interface DataProductsType {
    data: Array<ProductType>;
    total: number;
    limit: number;
    page: number;
}
export interface DataPostsType {
    data: Array<PostType>;
    total: number;
    limit: number;
    page: number;
}
