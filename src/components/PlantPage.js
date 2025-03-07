import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([]);
  const [searchBirch, setSearchBirch] = useState("");

  //Fetch data
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlantData(data))
  }, [])

  //All the things for the Search Bar functionality
  function searchPlants (e) {
    setSearchBirch(e.target.value)
  }

  const filterPlants = plantData.filter(plant => plant.name.toLowerCase().includes(searchBirch.toLowerCase()))
  
  //All the things for the Plant Form Input
  function plantInputForm (obj) {
    setPlantData([...plantData, obj])
  }


  return (
    <main>
      <NewPlantForm plantInputForm={plantInputForm}/>
      <Search searchPlants={searchPlants}/>
      <PlantList plantData={filterPlants}/>
    </main>
  );
}

export default PlantPage;

/**
 * As a user
 * I can update the priicie of a plant and still see the updated price after refreshing the page
 * I can delete a plant and it's still gone when I refresh the page
 */