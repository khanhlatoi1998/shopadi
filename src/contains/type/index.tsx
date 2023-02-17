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
    color_group?: Array<any>;
    size_group?: Array<any>;
    color?: string;
    size?: string;
    slug: string;
    price: number;
    oldPrice: number;
    quantity: number;
    rating?: number | string;
    type?: string;
    like: number;
    view: number;
    share: number;
    comment?: Array<any>;
}

// export interface ProductType {
//     _id: string;
//     product_name: "", 
//     product_category: "", 
//     product_slug: "", 
//     product_price: "", 
//     product_oldPrice: "", 
//     product_color: "", 
//     product_listColor: [],
//     product_description: "", 
//     product_image: "",
//     product_listImage: [],
//     size: ['S', 'M', 'L', 'X'],
//     quanlity: 1,
//     oldPrice: number;
//     quantity: number;
//     rating?: number | string;
//     type?: string;
//     like: number;
//     view: number;
//     share: number;
//     comment?: Array<any>;
// }

export interface CartItemType {
    _id: string;
    image: string;
    name: string;
    color: string;
    size: string;
    slug: string;
    price: number | string;
    oldPrice: number | string;
    quantity: number;
}

export interface PostType {
    id: string;
    image: string;
    title: string;
    desc: string;
    slug: string;
    comment: Array<any>;
    review: number;
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


export interface ContactType {
    name: string;
    phone: number | string;
    address: string;
    note: string;
}