import axios from "axios";
const instance = axios.create({
  baseURL: "https://whatsappclone12.herokuapp.com/",
});
export default instance;
