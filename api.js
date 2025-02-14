import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5001",
});

export const fetchList = async () => {
  return api
    .get("list")
    .then((response) => response.data)
    .catch((error) => {
      console.log("Error fetching data", error);
    })
    .finally(() => {
      console.log("Fetch attempt completed");
    });
};
