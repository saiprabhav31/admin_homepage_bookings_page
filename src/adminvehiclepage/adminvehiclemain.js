import "./adminvehicle.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./filter";
import Card from "./card";
import carData from "./cardata";

function Admincarspage() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState(carData);
  const [filteredVehicles, setFilteredVehicles] = useState(carData);
  const [filter, setFilter] = useState("All");

  // ✅ Function to update filter state
  const handleFilterChange = (selectedFilter) => {
    console.log("🔥 Filter Selected:", selectedFilter);
    setFilter(selectedFilter);
  };

  // ✅ Apply filtering & sorting logic
  useEffect(() => {
    console.log("🎯 useEffect triggered, Current Filter:", filter);
    let updatedVehicles = [...vehicles]; // Copy array

    if (filter === "Available") {
      updatedVehicles = updatedVehicles.filter((v) => v.availability === "Yes");
    } else if (filter === "Not available") {
      updatedVehicles = updatedVehicles.filter((v) => v.availability === "No");
    } else if (filter === "Cars") {
      updatedVehicles = updatedVehicles.filter((v) => v.type.toLowerCase() === "car");
    } else if (filter === "Bikes") {
      updatedVehicles = updatedVehicles.filter((v) => v.type.toLowerCase() === "bike");
    } else if (filter === "Price") {
      updatedVehicles.sort((a, b) => Number(a.price) - Number(b.price)); // ✅ Fix: Convert price to number
    } else if (filter === "Rating") {
      updatedVehicles.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)); // ✅ Fix: Convert rating to number
    }

    console.log("✅ Filtered Vehicles:", updatedVehicles);
    setFilteredVehicles(updatedVehicles); // ✅ Update state
  }, [filter]); // ✅ Runs when `filter` changes

  return (
    <div className="main">
      <Filter onFilterChange={handleFilterChange} />

      <div className="card-container">
        {filteredVehicles.map((vehicle, index) => (
          <Card
            key={index}
            name={vehicle.name}
            image={vehicle.image}
            price={vehicle.price}
            availability={vehicle.availability}
            type={vehicle.type}
            rating={vehicle.rating}
          />
        ))}
        <Card isAddCard={true} onAdd={() => navigate("/entercardetails")} />
      </div>
    </div>
  );
}

export default Admincarspage;
