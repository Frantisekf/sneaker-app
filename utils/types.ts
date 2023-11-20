
export type Sneaker = {
    _id: string,
    name:string,
    brand:string,
    price: number,
    size: number,
    year: number,
    rating: Rate
}

export type Rate = 1 | 2 | 3 | 4 | 5