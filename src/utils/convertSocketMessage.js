import SocketReduxTranslation from "../data/SocketReduxTranslation";
function convertSocketMessage(event) {
  return SocketReduxTranslation[event] || event;
}
export default convertSocketMessage;
