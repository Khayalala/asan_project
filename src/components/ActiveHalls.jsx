import { useEffect, useState } from "react";
import "../assets/styles/hallsPage.css";
import { fetchContent, fetchList } from "../../api";
import ToggleButton from "./ToggleButton";
export const ActiveHalls = () => {
  const [halls, setHalls] = useState([]);
  const [options, setOptions] = useState([]);
  const [submitState, setSubmitState] = useState(true);

  useEffect(() => {
    fetchContent().then((data) => setHalls(data));
    fetchList().then((data) => setOptions(data));
  }, [submitState]);

  const filteredHalls = halls.filter(hall=>hall.status===true);
  return (
    <div className="halls-container">
      <h2>Aktiv tədbirlər: {filteredHalls.length}</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Ad</th>
            <th>Mərkəz</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredHalls.map((hall, index) => {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
