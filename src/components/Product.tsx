import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement } from "react";

type ProductProps = {
  key: any;
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  key,
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: ProductProps): ReactElement => {
  const img: string = new URL(`../assets/${product.sku}.jpeg`, 
  import.meta.url).href

  const onAddToCart = () => dispatch({
    type: REDUCER_ACTIONS.ADD, 
    payload: { ...product, qty: 1 }
  })

  const itemInCart = inCart 
    ? ' Added'
    : null

  const content = (
    <article className="product">
        <img src={img} alt={product.name} className="product__image" />
        <h3 className="product__name">{product.name}</h3>
        <div className="product__cta">
            <p className="product__price">
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.price)}
                {itemInCart}
            </p>
            <button className="product__add" onClick={onAddToCart}>Add</button>
        </div>
    </article>
  )

  return content;
};

export default Product;
