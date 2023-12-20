import { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { shopContext } from "../../context/shopContext";
import ProductBox from "../shop/ProductBox";
import { Button } from "react-bootstrap";

export default function Cart() {
  const { cartItem, resetCart } = useContext(shopContext);

  return (
    <>
      <header className="d-flex justify-content-between">
        <h5>your cart items:</h5>
        <Button
          type="button"
          className="btn btn-warning btn-md "
          onClick={resetCart}
        >
          reset
        </Button>
      </header>
      <div className="row">
        {PRODUCTS.map((product) => {
          if (cartItem?.some((i) => i.id === product.id && i.count > 0))
            return <ProductBox key={product.id} data={product} />;
        })}
      </div>
    </>
  );
}
