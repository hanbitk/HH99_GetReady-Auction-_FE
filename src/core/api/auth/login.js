import axios from "axios";
import instance from "../axios/instance";

const login = async (users) => {
  console.log(users);
  try {
    const response = await instance.post(`/user/login`, users);
    const { token } = response.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(axios.defaults.headers.common);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const getUserAuth = async () => {
//   try {
//     console.log(response.data);
//     const response = await instance.get(`/user/signup`, {
//       headers: {
//         Authorization: `Bearer ${response.data.token}`,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

export { login };
