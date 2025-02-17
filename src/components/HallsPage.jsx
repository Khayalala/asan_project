import { useEffect, useState } from "react";
import Modal from "./Modal";
import "../assets/styles/hallsPage.css";
import { fetchContent, deleteHall, fetchList } from "../../api";
import ToggleButton from "./ToggleButton";

const HallsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [halls, setHalls] = useState([]);
  const [options, setOptions] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(true);
  const [submitState, setSubmitState] = useState(true);
  const [editHallId, setEditHallId] = useState(null);

  useEffect(() => {
    fetchContent().then((data) => setHalls(data));
    fetchList().then((data) => setOptions(data));
  }, [deleteStatus, submitState]);

  const handleDelete = async (id) => {
    try {
      const isConfirmed = confirm("Bu zalı silmək istəyinizə əminsiniz?");
      if (!isConfirmed) return;

      await deleteHall(id);
      setDeleteStatus((prev) => !prev);
    } catch (error) {
      console.error("Error deleting hall:", error);
    }
  };

  const handleEdit = (hall) => {
    setEditHallId(hall.id);
    setShowModal(true);
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
          {halls.map((hall, index) => {
            const branch = options.find(
              (option) => option.id === hall.branchId
            );
            return (
              <tr key={hall.id}>
                <td>{index + 1}</td>
                <td>{hall.name}</td>
                <td>{branch ? branch.name : "Naməlum"}</td>
                <td>
                  <ToggleButton hall={hall} setSubmitState={setSubmitState} />
                </td>
                <td>
                  <button onClick={() => handleEdit(hall)} className="edit">
                    Redaktə et
                  </button>
                  <button
                    onClick={() => handleDelete(hall.id)}
                    className="delete"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="create-hall" onClick={() => setShowModal(true)}>
        Yeni Zal Yarat
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            setEditHallId(null);
          }}
          setSubmitState={setSubmitState}
          editHallId={editHallId}
          halls={halls}
          options={options}
        />
      )}
    </div>
  );
};

export default HallsPage;
