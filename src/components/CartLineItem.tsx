import { ChangeEvent, ReactElement } from "react";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../context/CartProvider";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const img: string = new URL(`../assets/${item.sku}.jpeg`, import.meta.url)
    .href;

  const lineTotal: number = item.qty * item.price;
  const highestQty: number = 20 > item.qty ? 20 : item.qty;
  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemoveFromCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });
  }
    

  const content = (
    <li className="cart__item">
      <div className="cart__column">
        <img src={img} alt={item.name} className="cart__img" />
        <h2 className="cart__title">{item.name}</h2>
        <p className="cart__per-item" aria-label="Price per item">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(item.price)}
        </p>
      </div>
      <div className="cart__column cart__column--two">
        <p className="cart__qty">{item.qty}</p>
        <div className="cart__subtotal">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(lineTotal)}
        </div>

        <button onClick={onRemoveFromCart} className="cart__button"></button>
      </div>
    </li>
  );

  return content;
};

export default CartLineItem;
