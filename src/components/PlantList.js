import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData}) {

  const renderPlants = plantData.map(plant => {
    return <PlantCard key={plant.id} {...plant}/>
  })
  
  return (
    <ul className="cards">
      {renderPlants}
    </ul>
  );
}

export default PlantList;

/**
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
 */