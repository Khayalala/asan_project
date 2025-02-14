/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../assets/styles/hallsPage.css";
import axios from "axios";
const Modal = ({ onClose }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(
    "Xidmət mərkəzini seçin"
  );
  useEffect(() => {
    const fetchList = async () => {
      await axios
        .get("http://localhost:5001/list")
        .then((response) => setOptions(response.data))
        .catch((error) => console.log("Error fetching list", error))
        .finally(() => console.log("Fetch attempt completed"));
    };
    fetchList();
  }, []);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Yeni zal yaradılması</h2>

        <select value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
            <option disabled>Xidmət mərkəzini seçin</option>
            {
                options.map(option=>(
                    <option key={option.id} value={option.name}>{option.name}</option>
                ))
            }
        </select>

        <input type="text" placeholder="Zal adını daxil edin" />
        <div className="modal-actions">
          <button onClick={onClose}>Ləğv et</button>
          <button className="confirm">Təsdiqlə</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
