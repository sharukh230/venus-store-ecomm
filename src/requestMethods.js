import axios from "axios";

const BASE_URL = "https://rich-red-duckling-wrap.cyclic.app/api";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzhmZDU3Y2U0NzM3MGZkZmIyODI4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIzOTk3OCwiZXhwIjoxNjc0NDk5MTc4fQ.b-VQwbXc3ElZNVtLnz34EjXXNYlQlY6Bq_sK8-qEcKs"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});