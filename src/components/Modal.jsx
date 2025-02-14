/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../assets/styles/hallsPage.css";
import { fetchList } from "../../api";
import axios from "axios";
const Modal = ({ onClose }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(
    "Xidmət mərkəzini seçin"
  );
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    fetchList().then((data) => setOptions(data));
  }, []);
  
  const submitNewHall = async () => {
    axios.post("http://localhost:5001/content", {
      name: textInput,
      branchName: selectedOption,
      status: true,
    });
    onClose();
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Yeni zal yaradılması</h2>

        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option disabled>Xidmət mərkəzini seçin</option>
          {options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => setTextInput(e.target.value)}
          type="text"
          placeholder="Zal adını daxil edin"
        />
        <div className="modal-actions">
          <button onClick={onClose}>Ləğv et</button>
          <button className="confirm" onClick={submitNewHall}>
            Təsdiqlə
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
