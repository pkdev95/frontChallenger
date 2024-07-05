import "./Kart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  productDecrease,
  productIncrease,
  productdel,
} from "../redux/kart/actions";
import { kartReducer } from "../redux/kart/reducer";
import { selectProductsCount, selectProductsTotalPrice } from "../redux/kart/kart.selectors";

export const Kart = ({ visible, onClick }) => {
  const { products } = useSelector((rootReducer) => rootReducer.kartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);
  const productsCount = useSelector(selectProductsCount);

  const dispatch = useDispatch();

  const handleCloseClick = () => {
    const ktr = document.getElementById("ktt");
    ktr.classList.add("fadeOut");

    setTimeout(() => {
      onClick(false);
    }, 2000);
  };

  const handleIncreaseClick = (product) => {
    dispatch(productIncrease(product));
  };

  const handleDecreaseClick = (product) => {
    dispatch(productDecrease(product));
  };

  const handleDeleteClick = (product) => {
    dispatch(productdel(product));
  };

  return (
    visible && (
      <aside id="ktt" className="asi">
        <div className="topKart">
          <div className="close">
            <span className="onC" onClick={handleCloseClick}>
              X
            </span>
          </div>
          <h3 className="kartTitle">Carrinho de compras ({productsCount})</h3>
          <h4 className="tt">Total: R${productsTotalPrice > 0 ? productsTotalPrice : null }</h4>
        </div>
        <div className="kartItem">
          {products.map((product) => (
            <div key={product.id} className="kartItemSingle">
              <div
                onClick={() => handleDeleteClick(product.id)}
                className="dlt"
              >
                X
              </div>
              <div>
                <img src={product.photo} width={100} height={80} />
                <div className="qtds">
                  <span className="quantity">
                    {" "}
                    <span
                      onClick={() => handleDecreaseClick(product.id)}
                      className="decrease"
                    >
                      -
                    </span>{" "}
                    {product.quantity}{" "}
                    <span
                      onClick={() => handleIncreaseClick(product.id)}
                      className="increase"
                    >
                      +
                    </span>
                  </span>
                </div>
              </div>
              <div className="descri">
                <h4>{product.name}</h4>
                <h4>{product.description.substr(0, 57)}...</h4>
                <div className="checkOut">
                  <h4 className="right">
                    <button className="pric">R$:{product.price}</button>
                  </h4>
                  <h4 className="left">
                    <button className="pric2">Comprar</button>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    )
  );
};
