import React, { use } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from 'react'

function PlantPage() {
  
  const [searchItem, setSearchItem] = useState('');

  return (
    <main>
      <NewPlantForm />
      <Search searchItem = {searchItem} onSearchChange={setSearchItem}/>
      <PlantList />
    </main>
  );
}

export default PlantPage;
