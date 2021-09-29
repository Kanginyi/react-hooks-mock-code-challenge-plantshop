import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;

/**
 * When the app starts I can see all plants
 * I can add a new plant to the page by submiitting the form
 * I can mark a plant as sold out
 * I can search for plants by theiiri name and see a filtered lisit of plants
 */