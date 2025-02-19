import { useEffect, useState } from "react";
import "../assets/styles/hallsPage.css";
import { fetchContent, fetchList } from "../../api";
import HallsTable from "./HallsTable";

export const WaitingHalls = () => {
  const [halls, setHalls] = useState([]);
  const [options, setOptions] = useState([]);
  const [submitState, setSubmitState] = useState(true);

  useEffect(() => {
    fetchContent().then((data) => setHalls(data));
    fetchList().then((data) => setOptions(data));
  }, [submitState]);

  const filteredHalls = halls.filter((hall) => hall.status === false);
  return (
    <div className="halls-container">
      <h2 className="zalHeading">Gözləyən tədbirlər: {filteredHalls.length}</h2>
      <HallsTable
        halls={filteredHalls}
        options={options}
        setSubmitState={setSubmitState}
        showOperations={false}
      />
    </div>
  );
};

export default WaitingHalls;
