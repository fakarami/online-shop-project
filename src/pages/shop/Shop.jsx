import { PRODUCTS } from "../../data/products";
import ProductBox from "./ProductBox";
export default function Shop() {
  return (
    <>
      <div className="row  p-4 m-0  text-bg-dark  border-top">
        {PRODUCTS.map((product) => (
          <ProductBox key={product.id} data={product} />
        ))}
      </div>
    </>
  );
}
