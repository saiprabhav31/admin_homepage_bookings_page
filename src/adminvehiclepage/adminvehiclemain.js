import "./adminvehicle.css";
import React, { useState } from "react";
import Filter from "./filter";
import carData from "./cardata";
import Card from "./card";
import { useNavigate } from "react-router-dom";
function Admincarspage() {
  const navigate=useNavigate();
  const [vehicles, setVehicles] = useState(carData);

  const addVehicle = () => {
    const newVehicle = {
      type: "Car",
      name: "New Vehicle",
      price: "0000INR/day",
      availability: "Yes",
      rating: "0.0/5",
      image: "Images/placeholder.png",
    };

    setVehicles([...vehicles, newVehicle]);
  };

  return (
    <div className="main">
     
      <Filter />
      <div className="card-container">
        {vehicles.map((vehicle, index) => (
          <Card
            key={index}
            name={vehicle.name}
            image={vehicle.image}
            price={vehicle.price}
            availability={vehicle.availability}
            rating={vehicle.rating}
          />
        ))}
         <Card isAddCard={true} onAdd={()=>navigate('entercardetails')}  /> {/* onAdd={addVehicle} */}
      </div>
    </div>
  );
}

export default Admincarspage;
