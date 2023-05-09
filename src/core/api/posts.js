import instance from "./axios/instance";
import axios from "axios";
import useToken from "../../hooks/useToken";

const getPosts = async () => {
  try {
    const response = await axios.get(
      `http://3.26.95.244:8080/auction?page=0&size=6&sort=createdAt,desc`
    );
    return response.data;
  } catch (err) {
    console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
  }
};

const getMyPosts = async (token) => {
  try {
    const response = await axios.get(
      `http://3.26.95.244:8080/mypage/auction?page=0&size=5&sort=createdAt,desc`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
  }
};

const getPostDetail = async (id) => {
  try {
    const response = await axios.get(`http://3.26.95.244:8080/auction/${id}`);
    // console.log("response.data = ", response.data)
    return response.data;
  } catch (err) {
    console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
  }
}

const updatePost = async (payload) => {
  console.log(payload.content)
  try {
    const response = await axios.put(`http://3.26.95.244:8080/auction/edit/${payload.id}`, {
      title: payload.title,
      category: payload.category,
      content: payload.content,
      minPrice: payload.minPrice,
      deadline: payload.deadline
    },
      {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        }
      });
    console.log("response.data = ", response.data)
    return response.data
  }
  catch {
    console.log("포스트 수정 오류");
  }
};


const deletePost = async (payload) => {
  console.log(payload)
  try {
    const response = await axios.get(`http://3.26.95.244:8080/auction/delete/${payload.id}`,{
      header:{
        Authorization: `Bearer ${payload.token}`
      }
    });
    return response.data;
  } catch (err) {
    console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
  }
}

export { getPosts, getMyPosts, getPostDetail, updatePost, deletePost };
