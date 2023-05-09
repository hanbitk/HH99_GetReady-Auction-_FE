import axios from "axios";
import instance from "../axios/instance";

const signUp = async (users) => {
  try {
    const { data } = await axios.post(`http://3.26.95.244:8080/user/signup`, users);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { signUp };
