type HeaderProps = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: HeaderProps) => {
  const button = viewCart ? (
    <button className="header__button" onClick={() => setViewCart(false)}>Products</button>
  ) : (
    <button className="header__button" onClick={() => setViewCart(true)}>Cart</button>
  );

  const content = (
    <nav className="nav">
        {button}
    </nav>
  )

  return content;
};

export default Nav;
