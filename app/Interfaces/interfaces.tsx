export interface BannerInterface {
    heading: string
}

export interface CategoryItemInterface {
    title: string
    image: string
}

export interface FooterItemInterface {
    title: string
}

export interface FooterColumnInterface {
    mainHeading: string
    titles: string[]
}

export interface RouteNameInterface {
    icon: string,
    routeName: string,
    route: string,
    updateMenu: () => {},
    hasDelete: boolean,
}

export interface MenuInterface {
    toggleMenu: () => void
    width: string,
    hidden: string
}

export interface MenuItemInterface {
    href: string
    icon: string
    routeName?: string
    toggleMenu: () => void
}

export interface InputInterface {
    label: string
    onChange: (data: any) => void
    valueToUpdate: string,
    value: string
}

export type CategoriesStateInterface = {
    active: number
}

export type ContactUsInterface = {
    firstName: string,
    lastName: string,
    email: string,
    mobile: string
}

export interface ShoppingListInterface {
    index: number,
    item: any
}

export type registerStateType = {
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber:string,
    password: string,
    receiveEmails: boolean,
    readPolicy: boolean,
    loading:boolean
}

export type loginType = {
    email:string,
    password: string,
    loading: boolean,
    modalOpen: boolean,
}

export interface LoginInterface {
    router: any   
}

export type modalType = {
    isOpen:boolean
    closeModal:()=>void
    email?:string
    sendPassword?:()=>void
    title?:any
    updateEmail?:(e:string)=>void
    updateState?:(e:any) =>void
    saveItem?:(e:any)=>void
}

export type profileStateType = {
    email:string
    isActive: boolean,
    purchases: purchaseType[]
    updateValue:string
    modal:boolean
}

export type purchaseType = {
    status:string
    deliveryDate?:string
    address?:string
    note?:string,
    items:any[]
    price:string
}

export type userType = {
    displayName:string
}

export type shoppingCartType = {
    cart: any[]
}

export type addressType = {
    stores: any[]
    store:number,
    items:any[]
}

export interface checkoutInterface{
    total:string
    onClick:()=>void
}

export type adminType = {
    contacts: any[]
    contactsMenu: string[]
    currentView: string
    id:number
    modal:string
    orderHeaders : string[]
    orders: any[]
    productHeaders: string[]
    products:any[]
    pagesMenu: string[]
    productsCategories:any[]
    productsCategoryMenu: string[]
    productsMenu: string[]
    productsSubCategories:any[]
    productsSubCategoryMenu: string[]
    selectedOrder:any
    sizes:string[]
    viewOrder:boolean
}

export type productType = {
    brand:string
    description:string
    heading:string
    id:number
    loading:boolean
    message:string
    price:string
    quantity:number
    sale:string
    collection:string
    category:string
    images:string[]
    saleEndDate:string
    saleStartDate:string
    show:boolean
    size:string
    status:string
}

export interface ToastInterface {
    title:string
    message: string
    setShow: (message?:string,status?:string) => void
    show: boolean
    status: string
}

export interface AddNewInterface {
    router: any
    id:string | null
}