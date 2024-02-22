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
    password: string,
    receiveEmails: boolean,
    readPolicy: boolean,
    loading:boolean
}