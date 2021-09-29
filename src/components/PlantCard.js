import React, { useState } from "react";

function PlantCard({name, price, image = "https://via.placeholder.com/400"}) {
  const [stock, setStock] = useState(true);

  function switchButton () {
    setStock(stock => !stock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={switchButton} className="primary">In Stock</button>
      ) : (
        <button onClick={switchButton}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
