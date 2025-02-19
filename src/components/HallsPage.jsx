import { useEffect, useState } from "react";
import "../assets/styles/hallsPage.css";
import { fetchContent, deleteHall, fetchList } from "../../api";
import HallsTable from "./HallsTable";
import Modal from "./Modal";

const HallsPage = () => {
  const [halls, setHalls] = useState([]);
  const [options, setOptions] = useState([]);
  const [submitState, setSubmitState] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editHallId, setEditHallId] = useState(null);

  useEffect(() => {
    fetchContent().then((data) => setHalls(data));
    fetchList().then((data) => setOptions(data));
  }, [submitState]);

  const handleDelete = async (id) => {
    try {
      const isConfirmed = confirm("Bu zalı silmək istəyinizə əminsiniz?");
      if (!isConfirmed) return;
      await deleteHall(id);
      setSubmitState((prev) => !prev);
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
      <h2 className="zalHeading">Zallar: {halls.length}</h2>
      <HallsTable
        halls={halls}
        options={options}
        setSubmitState={setSubmitState}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        showOperations={true}
      />
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
