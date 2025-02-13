import { useState, useEffect } from "react";
import "../assets/styles/global.css";
import "../assets/styles/dropdown.css";
import { fetchList } from "../../api";
const Dropdown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Xidmət mərkəzi");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchList()
      .then((data) => {
        setOptions(data);
      })
      .catch((error) => {
        console.log("Error fetching data"), error;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="dropdown_container">
      <button onClick={() => setShowOptions(!showOptions)}>
        {selectedOption} &#9662;
      </button>
      {loading && <p>Loading...</p>}
      {showOptions && !loading && (
        <ul>
          {options.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setSelectedOption(item.name);
                setShowOptions(false);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
