import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from 'react'

function PlantPage({plants}) {
  
  const [searchItem, setSearchItem] = useState('');

  return (
    <main>
      <NewPlantForm />
      <Search searchItem = {searchItem} onSearchChange={setSearchItem}/>
      <PlantList searchItem = {searchItem}/>
    </main>
  );
}

export default PlantPage;
