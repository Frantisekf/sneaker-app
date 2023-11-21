
export type Sneaker = {
    _id: string,
    name:string,
    brand:string,
    price: number,
    size: number,
    year: number,
    rating: Rate
}

export type Rate = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
