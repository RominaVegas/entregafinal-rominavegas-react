import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "grey",
        height: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      <h4 style={{ color: "white" }}>Amelia Dress🎀</h4>
      <Link to="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/dgyebngec/image/upload/v1699710301/logo-ameliadress_iemvl1.png"
          alt="logo amelia dress"
        />
      </Link>
    </div>
  );
};

export default Footer;
