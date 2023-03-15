import { useSelector } from "react-redux"

export function GetProductDb() {
    const getProducts = useSelector((state) => state.products)
    const getCart = useSelector((state) => state.cart)

    return [getCart, getProducts]
}
