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
