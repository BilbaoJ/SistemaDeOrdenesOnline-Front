import type Product from "./Product";

export default interface Order{
    product: Product[],
    totalPrice: number
}