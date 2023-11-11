import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./checkoutOficial.css";

const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (!userData.name || !userData.phone || !userData.email) {
      return alert("Por favor, complete todos los campos");
    }

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        alert("¡Compra realizada con éxito!");
      })
      .catch((error) => {
        console.error("Error al procesar la compra:", error);
        alert(
          "Hubo un error al procesar la compra. Por favor, inténtalo de nuevo."
        );
      });

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <>
      {orderId ? (
        <div className="checkout-container">
          <h2>Gracias por su compra, su N° de comprobante es {orderId}</h2>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form className="order-success" onSubmit={handleSubmit}>
          <h1>Por favor complete sus datos y presione comprar</h1>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingresa tu telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </>
  );
};

export default CheckoutOficial;
