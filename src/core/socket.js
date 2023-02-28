import io from "socket.io-client";
import axios from "./axios";
const socket = io("http://192.168.76.165:5000/", {
  autoConnect: false,
});
socket.auth = { token: window.localStorage.getItem("token") };
socket.onAny((event, ...args) => {
  console.log(event, args);
});
socket.on("connect_error", (error) => {
  if (error.data === 401) {
    axios
      .get("api/auth/refresh", { withCredentials: true })
      .then((response) => {
        window.localStorage.setItem("token", response.data.accessToken);
        socket.auth.token = window.localStorage.getItem("token");
        socket.connect();
      });
  }
});
export default socket;
