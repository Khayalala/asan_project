import { useEffect, useState } from "react";
import Modal from "./Modal";
import "../assets/styles/hallsPage.css";
import { fetchContent, deleteHall } from "../../api";

const HallsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [halls, setHalls] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(true);
  const [submitState, setSubmitState] = useState(true);

  useEffect(() => {
    fetchContent().then((data) => setHalls(data));
  }, [deleteStatus, submitState]);
  const handleDelete = async (id) => {
    try {
      await deleteHall(id); 
      setDeleteStatus(prev => !prev); 
    } catch (error) {
      console.error("Error deleting hall:", error);
    }
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
                <button
                  id={hall.id}
                  className="edit"
                  onClick={() => setShowModal(true)}
                >
                  Redaktə et
                </button>
                <button
                  onClick={() => {
                    handleDelete(hall.id)
                  }}
                  className="delete"
                >
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
      {showModal && <Modal onClose={() => {
        setShowModal(false)}} setSubmitState={setSubmitState} />}
    </div>
  );
};

export default HallsPage;
