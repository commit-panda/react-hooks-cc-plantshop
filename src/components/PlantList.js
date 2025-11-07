import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants = [], searchItem = ""}) {
  // console.log(plants)

  const filteredPlants = plants.filter(plant =>
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
