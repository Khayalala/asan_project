/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../assets/styles/hallsPage.css";
import { submitNewHall, editHall } from "../../api";

const Modal = ({ onClose, setSubmitState, editHallId, halls, options }) => {
  const [selectedOption, setSelectedOption] = useState(
    "Xidmət mərkəzini seçin"
  );
  const [textInput, setTextInput] = useState("");
  const [branchId, setBranchId] = useState(null);

  useEffect(() => {
    if (editHallId) {
      const editingHall = halls.find((hall) => hall.id === editHallId);
      if (editingHall) {
        setTextInput(editingHall.name);
        const selectedBranch = options.find(
          (option) => option.id === editingHall.branchId
        );
        if (selectedBranch) {
          setSelectedOption(selectedBranch.name);
          setBranchId(selectedBranch.id);
        }
      }
    } else {
      setTextInput("");
      setSelectedOption("Xidmət mərkəzini seçin");
      setBranchId(null);
    }
  }, [editHallId, halls, options]);

  const handleSubmit = async () => {
    if (!textInput || !branchId) {
      alert("Xanalar boş ola bilməz");
      return;
    }

    if (editHallId) {
      await editHall(editHallId, textInput, branchId); 
    } else {
      await submitNewHall(textInput, branchId); 
    }

    onClose();
    setSubmitState((prev) => !prev);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{editHallId ? "Zalı Redaktə Et" : "Yeni Zal Yarat"}</h2>

        <select
          value={selectedOption}
          onChange={(e) => {
            const selected = options.find(
              (option) => option.name === e.target.value
            );
            setSelectedOption(selected.name);
            setBranchId(selected.id);
          }}
        >
          <option disabled>Xidmət mərkəzini seçin</option>
          {options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>

        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          type="text"
          placeholder="Zal adını daxil edin"
        />

        <div className="modal-actions">
          <button onClick={onClose}>Ləğv et</button>
          <button className="confirm" onClick={handleSubmit}>
            {editHallId ? "Redaktə et" : "Təsdiqlə"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
