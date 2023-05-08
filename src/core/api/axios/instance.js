import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// instance2.interceptors.request.use((config) => {
//   if (config.headers === undefined) return;
//   const token = localStorage.getItem("id");
//   config.headers["Authorization"] = `${token}`;
//   // console.log(config)
//   return config;
// });

instance.interceptors.request.use(
  // function that run before request
  function (config) {
    console.log("인터셉터 요청 성공!");
    return config;
  },
  // function that run before error request
  function (error) {
    console.log("인터셉터 요청 오류!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  // function that run before send response
  function (response) {
    console.log("인터셉터 응답 받았습니다!");
    return response;
  },

  // function that run brefore send error response
  function (error) {
    console.log("인터셉터 응답 오류 발생!", error);
    return Promise.reject(error);
  }
);


export default instance;
