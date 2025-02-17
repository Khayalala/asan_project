/* eslint-disable no-undef */
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5001",
});

export const fetchList = async () => {
  return api
    .get("list")
    .then((response) => response.data)
    .catch((error) => {
      console.log("Error fetching list", error);
    })
    .finally(() => {
      console.log("List fetch attempt completed");
    });
};
export const fetchContent = async () => {
  return api
    .get("content")
    .then((response) => response.data)
    .catch((error) => {
      console.log("Error fetching content", error);
    })
    .finally(() => {
      console.log("Content fetch attempt completed");
    });
};
export const submitNewHall = async (name, branchId) => {
  return api.post("content", {
    name,
    branchId,
    status: true,
  });
};
export const deleteHall = async (id) => {
  return api
    .delete(`content/${id}`)
    .then(() => console.log("Hall deleted successfully"))
    .catch((error) => console.log("Error deleting the hall", error))
    .finally(() => console.log("Delete attempt completed."));
};

export const editHall = async (id, name, branchId, status) => {
  return api
    .patch(`content/${id}`, {
      name,
      branchId,
      status, 
    })
    .then(() => console.log("Hall updated successfully"))
    .catch((err) => console.log("Error editing hall", err));
};
