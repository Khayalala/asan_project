import { useState } from "react";
import Modal from "./Modal";
import "../assets/styles/hallsPage.css";
const HallsPage = () => {
  const [showModal, setShowModal] = useState(false);
  
  const halls = [
    { id: 1, name: "Inprogress", center: "ABAD Publik Hüquqi Şəxs" },
    { id: 2, name: "dcdc dcdcdc", center: "ASAN xidmət mərkəzləri" },
    { id: 3, name: "Zal12ee", center: "1 saylı Bakı ASAN xidmət mərkəzi" },
    { id: 4, name: "YoxlamaZali", center: "ASAN xidmət mərkəzləri" },
  ];

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
              <td>{hall.center}</td>
              <td>
                <span className="status">Aktiv</span>
              </td>
              <td>
                <button className="edit">Redaktə et</button>
                <button className="delete">Sil</button>
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
