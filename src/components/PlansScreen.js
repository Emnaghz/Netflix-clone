import React from "react";
import "../styles/PlansScreen.css";

function PlansScreen() {
  const products = [
    {
      id: 1,
      name: "Premium",
      price: 50,
      status: "active",
      description: "4K +HDR",
    },
    {
        id: 2,
        name: "Basic",
        price: 50,
        status: "active",
        description: "720p",
      },
      {
        id: 3,
        name: "Standard",
        price: 50,
        status: "active",
        description: "1080p",
      },
  ];

  return (
    <div className="plansScreen">
      <p></p>
      {products.map((product) => {
        return (
          <div className="planScreen_plan" key={product.id}>
            <div className="planScreen_info">
              <h5>{product.name}</h5>
              <h5>{product.description}</h5>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
