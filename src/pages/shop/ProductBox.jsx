import { useContext } from "react";
import { Button } from "react-bootstrap";
import { shopContext } from "../../context/shopContext";

export default function ProductBox({ data }) {
  const { cartItem, addToCart, removeFromCart } = useContext(shopContext);
  const isInCart = cartItem?.some((item) => item.id === data.id);
  return (
    <div className="col-3 border rounded h-10 ">
      <h6>{data.productName}</h6>
      <img src={data.productImage} alt="ax" className="w-100 h-50" />
      <hr />
      <p>price:{data.price}$</p>
      Add to cart :{" "}
      <Button
        type="button"
        className="btn btn-light btn-sm"
        onClick={() => addToCart(data.id)}
      >
        +
      </Button>
      <span className="mx-1">
        {cartItem?.filter((row) => row.id === data.id)[0]?.count}
      </span>
      {isInCart && (
        <Button
          type="button"
          className="btn btn-light btn-sm"
          onClick={() => removeFromCart(data.id)}
        >
          -
        </Button>
      )}
    </div>
  );
}
