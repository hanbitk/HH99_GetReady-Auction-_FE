import instance from "./axios/instance";
import axios from "axios";
import useToken from "../../hooks/useToken";

// 실시간 핫 경매품 조회
// const getHotPosts = async () => {
//   try {
//     const response = await axios.get(
//       `http://localhost:8080/?page=0&size=3&sort=createdAt,desc` -> 확인 필요: 페이지 없이 사이즈로만 확인 가능한지 그리고 main이 필요한지. 현재 핫 경매품 조회는 페이지가 아니라 home 에 있는 섹션이라.
//     );
//     return response.data;
//   } catch (err) {
//     console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
//   }
// };

// 전체 경매품 조회
const getPosts = async () => {
  try {
    const response = await instance.get(
      `/auction?page=0&size=6`,
    );
    return response.data.data;
  } catch (err) {
    console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
  }
};

const getHotPosts = async () => {
  try {
    const response = await instance.get(
      `/main?page=0&size=3`,
    );
    return response.data.data;
  } catch (err) {
    console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
  }
};

// 내 경매품 조회
const getMyPosts = async (token) => {
  try {
    const response = await instance.get(
      `/mypage/auction?page=0&size=6`,
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

// 내 입찰 조회
const getMyBiddings = async (token) => {
  try {
    const response = await instance.get(
      `/mypage/bidding?page=0&size=6`,
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

const updatePost = async (payload) => {
  console.log(payload.content);
  try {
    const response = await instance.put(
      `/auction/edit/${Number(payload.id)}`,
      {
        title: payload.title,
        category: payload.category,
        content: payload.content,
        minPrice: payload.minPrice,
        deadline: payload.deadline,
      },
      {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    console.log("response.data = ", response.data);
    return response.data.data;
  } catch {
    console.log("포스트 수정 오류");
  }
};

const deletePost = async (payload) => {
  console.log(payload);
  try {
    const response = await instance.get(`/auction/delete/${payload.id}`, {
      header: {
        Authorization: `Bearer ${payload.token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
  }
};

const getPostDetail = async (id) => {
  try {
    const response = await instance.get(`/auction/${id}`);
    return response.data;
  } catch (err) {
    console.log(`상세 페이지 불러오는 중에 오류 발생: ${err}`);
  }
};

const biddingPost = async (payload) => {
  console.log("payload = ", payload);
  try {
    const response = await instance.post(
      `/bid/add/${Number(payload.id)}`,
      {
        price: payload.Price,
      },
      {
        header: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(`데이터 불러오는 중에 오류 발생: ${err}`);
  }
};

export {
  getPosts,
  getMyPosts,
  getMyBiddings,
  getHotPosts,
  deletePost,
  updatePost,
  getPostDetail,
  biddingPost,
};
