import axios from "axios";

export const fetchTitles = async () => {
  const token = localStorage.getItem("authToken");
  
  try {
    const response = await axios.get(`${import.meta.env.VITE_LocalHost}/api/v1/title`, {
      headers: {
        Authorization: token,
      },
    });
    // console.log("Data fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("env not working", error);
  }
};
