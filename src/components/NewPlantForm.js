import React, {useState} from "react";

function NewPlantForm({plantInputForm}) {
  //Create state for each of the input forms
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState(0);

  function updatePlantForm(e) {
    e.preventDefault();

    const newPlantObj = {
      name: plantName,
      image: plantImage,
      price: plantPrice
    }

    plantInputForm(newPlantObj)

    e.target.reset();
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={updatePlantForm}>
        <input onChange={e => setPlantName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input onChange={e => setPlantImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input onChange={e => setPlantPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
