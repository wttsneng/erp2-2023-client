import io from "socket.io-client";
import axios from "./axios";
const socket = io(process.env.REACT_APP_API_URL, {
  autoConnect: false,
  auth: {
    token: window.localStorage.getItem("token"),
  },
});
socket.on("connect_error", (error) => {
  if (error.data === 401) {
    axios
      .get("/api/auth/refresh", { withCredentials: true })
      .then((response) => {
        window.localStorage.setItem("token", response.data.accessToken);
        socket.auth.token = window.localStorage.getItem("token");
        socket.connect();
      });
  }
});
export default socket;
