import React from "react";
import PlantCard from "./PlantCard";
import data from "../db.json";

function PlantList({searchItem = ""}) {
  // console.log(plants)

  const filteredPlants = data.plants.filter(plant =>
    plant.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
      <ul className="cards">
      {filteredPlants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
