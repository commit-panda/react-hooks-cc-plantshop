import React from "react";
import PlantCard from "./PlantCard";
import plants from "../db.json";

function PlantList() {
  return (
    console.log(plants),
    <ul className="cards">
      { plants.map( plant => (
       
          <PlantCard plant = {plant}/>
      )
      )}
    </ul>
  );
}

export default PlantList;
