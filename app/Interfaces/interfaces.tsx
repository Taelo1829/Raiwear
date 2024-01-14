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
