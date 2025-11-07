import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from 'react'

function PlantPage({plants, onAddPlant}) {
  
  const [searchItem, setSearchItem] = useState('');

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search searchItem = {searchItem} onSearchChange={setSearchItem}/>
      <PlantList plants = {plants} searchItem = {searchItem}/>
    </main>
  );
}

export default PlantPage;
