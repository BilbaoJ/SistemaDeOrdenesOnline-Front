import type Product from "./Product";

export interface Order{
    product: Product[],
    totalPrice: number
}