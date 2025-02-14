import { useEffect, useState } from "react";
import Modal from "./Modal";
import "../assets/styles/hallsPage.css";
import { fetchContent } from "../../api";
import axios from "axios";
const HallsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [halls, setHalls] = useState([]);
  useEffect(() => {
    fetchContent().then((data) => setHalls(data));
  }, []);
  const deleteHall = async (id) => {
    axios
      .delete(`http://localhost:5001/content/${id}`)
      .then(() => console.log("Hall deleted successfully"))
      .catch((error) => console.log("Error deleting the hall", error));
  };
  return (
    <div className="halls-container">
      <h2>Zallar: {halls.length}</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Ad</th>
            <th>Mərkəz</th>
            <th>Status</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {halls.map((hall, index) => (
            <tr key={hall.id}>
              <td>{index + 1}</td>
              <td>{hall.name}</td>
              <td>{hall.branchName}</td>
              <td>
                <span className="status">Aktiv</span>
              </td>
              <td>
                <button id={hall.id} className="edit">
                  Redaktə et
                </button>
                <button onClick={() => deleteHall(hall.id)} className="delete">
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="create-hall" onClick={() => setShowModal(true)}>
        Yeni Zal Yarat
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default HallsPage;
