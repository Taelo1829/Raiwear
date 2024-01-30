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