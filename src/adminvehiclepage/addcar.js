import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./adminvehicle.css";

function AddCar({ onAddVehicle, editingVehicle }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "Car",
    name: "", // This will store vehicle model
    price: "", // This will store price per day
    availability: "Yes",
    rating: "4.0",
    image: "",
    // Additional details specific to the form
    fuelType: "Petrol",
    seatingCapacity: "",
    registrationPlate: "",
    vehicleId: "",
  });

  useEffect(() => {
    if (editingVehicle) {
      setFormData(editingVehicle);
    }
  }, [editingVehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      // Update the card display fields when related form fields change
      ...(name === "vehicleModel" && { name: value }),
      ...(name === "pricePerDay" && { price: value }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create the card data structure
    const cardData = {
      type: "Car",
      name: formData.vehicleModel,
      price: formData.pricePerDay,
      availability: "Yes",
      rating: "4.0",
      image: formData.photo || "Images/default-car.png",
      // Additional details
      fuelType: formData.fuelType,
      seatingCapacity: formData.seatingCapacity,
      registrationPlate: formData.registrationPlate,
      vehicleId: formData.vehicleId,
    };
    onAddVehicle(cardData);
    navigate("/admincarspage");
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "image/jpeg") {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        photo: imageUrl,
        image: imageUrl, // Update both photo and image fields
      }));
    } else {
      alert("Please upload a JPG image only");
    }
  };

  return (
    <div className="add-car-container" >
      <h2>Enter Vehicle Details</h2>
      <form onSubmit={handleSubmit} className="add-car-form">
        <div className="form-group">
          <label>Vehicle model :</label>
          <input
            type="text"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Fuel type :</label>
          <select
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
            required
          >
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
            <option value="CNG">CNG</option>
          </select>
        </div>

        <div className="form-group">
          <label>Seating capacity :</label>
          <input
            type="number"
            name="seatingCapacity"
            value={formData.seatingCapacity}
            onChange={handleChange}
            min="1"
            max="50"
            required
          />
        </div>

        <div className="form-group">
          <label>Price per day :</label>
          <input
            type="number"
            name="pricePerDay"
            value={formData.pricePerDay}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Registration plate :</label>
          <input
            type="text"
            name="registrationPlate"
            value={formData.registrationPlate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Vehicle Id :</label>
          <input
            type="text"
            name="vehicleId"
            value={formData.vehicleId}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="button"
          className="upload-btn"
          onClick={() => document.getElementById("photo-upload").click()}
        >
          <span>📤 Upload photo(*jpg only)</span>
          <input
            id="photo-upload"
            type="file"
            accept=".jpg"
            onChange={handlePhotoUpload}
            style={{ display: "none" }}
          />
        </button>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCar;
