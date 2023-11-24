import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div>
      <div className="containerItemDetail">
        <div className="containerImage">
          <img src={productSelected.img} alt="" />
        </div>

        <div className="containerDetail">
          <h2 style={{ fontFamily: "monospace", fontSize: "23px" }}>
            <span>Nombre:</span> {productSelected.title}
          </h2>
          <h2 style={{ fontFamily: "monospace", fontSize: "23px" }}>
            <span>Descripcion:</span> {productSelected.description}
          </h2>
          <h2 style={{ fontFamily: "monospace", fontSize: "23px" }}>
            <span>Precio:</span> ${productSelected.price}.-
          </h2>
        </div>
      </div>

      {initial && <h4>Ya tienes {initial} unidades en el carrito</h4>}

      {showCounter ? (
        <div className="counterContainer">
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      ) : (
        <Link to="/cart">Finalizar Compra</Link>
      )}
    </div>
  );
};
