import React from "react";
import PlantCard from "./PlantCard";
import db from "../db.json";

function PlantList() {
  // console.log(plants)
  return (
      <ul className="cards">
        { db.plants.map( plant => (
        
            <PlantCard plant = {plant}/>
        )
        )}
      </ul>
  );
}

export default PlantList;
