export interface BannerInterface {
    heading: string
}

export interface ShoppingListInterface {
    index: number
    item: {
        title: string,
        image: string,
        price: string,
        available: boolean
    }
}

export interface CategoryItemInterface {
    title: string
    image: string
}

export interface FooterItemInterface {
    title: string
    index: number
}

export interface FooterColumnInterface {
    mainHeading: string
    titles: string[]
}