import axios from "axios";
import instance from "../axios/instance";

const signUp = async (users) => {
  try {
    const { data } = await instance.post(`/user/signup`, users);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { signUp };
