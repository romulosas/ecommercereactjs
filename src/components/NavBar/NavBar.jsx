import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Bike's Ecommerce</h3>
      <div>
        <button>Enduro</button>
        <button>Downhill</button>
        <button>Trail</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
