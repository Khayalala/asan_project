/* eslint-disable react/prop-types */
import ToggleButton from "./ToggleButton";

const HallsTable = ({
  halls,
  options,
  setSubmitState,
  handleDelete,
  handleEdit,
  showOperations,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Ad</th>
          <th>Mərkəz</th>
          <th>Status</th>
          {showOperations && <th>Əməliyyatlar</th>}
        </tr>
      </thead>
      <tbody>
        {halls.map((hall, index) => {
          const branch = options.find((option) => option.id === hall.branchId);
          return (
            <tr key={hall.id}>
              <td>{index + 1}</td>
              <td>{hall.name}</td>
              <td>{branch ? branch.name : "Naməlum"}</td>
              <td>
                <ToggleButton hall={hall} setSubmitState={setSubmitState} />
              </td>
              {showOperations && (
                <td className="operations">
                  {handleEdit && (
                    <button onClick={() => handleEdit(hall)} className="edit">
                      Redaktə et
                    </button>
                  )}
                  {handleDelete && (
                    <button
                      onClick={() => handleDelete(hall.id)}
                      className="delete"
                    >
                      Sil
                    </button>
                  )}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HallsTable;
