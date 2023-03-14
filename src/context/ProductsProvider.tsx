import { createContext, ReactElement, useState } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Adidas Originals Superstar",
        "price": 39.99
    },
    {
        "sku": "item0002",
        "name": "Nike Dunk High Chocolate",
        "price": 59.99
    },
    {
        "sku": "item0003",
        "name": "Adidas Originals Stan Smith",
        "price": 29.99
    },
    {
        "sku": "item0004",
        "name": "Street Beat Block Originals",
        "price": 79.99
    },
    {
        "sku": "item0005",
        "name": "Street Beat Wave Super-Beater",
        "price": 99.99
    },
    {
        "sku": "item0006",
        "name": "PUMA Slipstream Super-Ultra",
        "price": 19.99
    }
]

export type UseProductContextType = {
    products: ProductType[]
}

const initContextState: UseProductContextType = {
    products: []
}

const ProductsContext = createContext<UseProductContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    return (
        <ProductsContext.Provider value={{ products }}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsContext