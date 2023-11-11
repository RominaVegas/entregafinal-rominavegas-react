import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userInfo);
  };

  console.log(errors);

  return (
    <div>
      <h1>Estoy en el checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          placeholder="Nombre"
        />
        <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
          {errors.nombre}
        </span>
        <input
          type="text"
          name="apellido"
          onChange={handleChange}
          placeholder="Apellido"
        />
        <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
          {errors.apellido}
        </span>

        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
          {errors.email}
        </span>

        <button>Enviar</button>
        <button type="button" onClick={() => console.log("se cancelo")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
