import Nav from "./Nav";
import useCart from "../hooks/useCart";

type HeaderProps = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: HeaderProps) => {
  const { totalItems, totalPrice } = useCart();

  const content = (
    <header className="header">
      <h1 className="header__title">Sneakers</h1>
      <div className="header__group">
        <div className="header__price-box">
          <p className="header__items header__totals">
            Total items: {totalItems}
          </p>
          <p className="header__price header__totals">
            Total price: {totalPrice}
          </p>
        </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </div>
    </header>
  );

  return content;
};

export default Header;
