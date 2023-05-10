import axios from "axios";
import instance, { baseURL } from "../axios/instance";

const login = async (users) => {
  try {
    const response = await instance.post(`/user/login`, users);
    const accessToken = response.headers.get("authorization");
    const token = accessToken.split(" ")[1];
    const loginSuccess = response.data.message;
    console.log(loginSuccess)
    console.log(response.data.status)
    alert(response.data.message)
    return { token, loginSuccess };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const getUserAuth = async () => {
//   try {
//     const accessToken = response.headers.get("authorization");
//     console.log(accessToken)
//     const response = await baseURL.get(`/mypage/auction`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
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
