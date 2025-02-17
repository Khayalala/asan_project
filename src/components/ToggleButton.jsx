/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/styles/toggleButton.css";
import { editHall } from "../../api";

const ToggleButton = ({ hall, setSubmitState }) => {
  const [isOn, setIsOn] = useState(hall.status); 
  const handleToggle = async () => {
      setIsOn(!isOn); 
      await editHall(hall.id, hall.name, hall.branchName, !isOn)
      .then(()=>console.log("Toggled successfully"))
      .catch(err=>console.error("Error toggling", err)) 
      setSubmitState(prev=>!prev)
  };
  return (
    <div className="toggle-container">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle} 
        />
        <span className="slider"></span>
      </label>
      <p className="toggle-label">{isOn ? "Aktiv" : "Deaktiv"}</p>
    </div>
  );
};

export default ToggleButton;
