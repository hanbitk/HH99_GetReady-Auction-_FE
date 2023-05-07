import axios from "axios";
import instance, { instance2 } from "../axios/instance";

// const signUp = async (users) => {
//   try {
//     const response = await instance.post(`/users`, users);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// mocking server
const register = async (users) => {
  try {
    const data = await axios.post(`http://3.38.191.164/register`, users);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const login = async (users) => {
  console.log(users);
  try {
    const response = await axios.post(`http://3.38.191.164/login`, users);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const user = async () => {
//   try {
//     const response = await axios.get(`http://3.38.191.164/user`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

export { register, login };
