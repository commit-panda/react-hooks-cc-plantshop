import React from "react";
import { useState } from 'react'

function PlantCard({plant}) {
  // console.log(plant)

  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>
          In Stock</button>
      ) : (
        <button onClick={() => setInStock(false)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
