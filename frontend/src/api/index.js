import axios from "axios";
// const baseURL = "https://guessthemovie.onrender.com/";
const baseURL = "http://localhost:4000/";

export const validateUser = async (token) => {
  try {
    console.log(token);
    const res = await axios.get(`${baseURL}api/users/login`, {
      headers: {
        Authorization: "Bearer" + token,
      },
    });
    return res.data;
  } catch (e) {
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseURL}api/users/getUsers`);
    return res.data;
  } catch (e) {
    return null;
  }
};
