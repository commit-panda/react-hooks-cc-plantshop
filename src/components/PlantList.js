import React from "react";
import PlantCard from "./PlantCard";
import data from "../db.json";

function PlantList() {
  // console.log(plants)
  return (
      <ul className="cards">
        { data.plants.map( plant => (
        
            <PlantCard plant = {plant}/>
        )
        )}
      </ul>
  );
}

export default PlantList;
