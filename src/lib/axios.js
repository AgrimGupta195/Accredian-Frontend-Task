import axios from "axios";
export const axiosInstance = axios.create({
    baseURL:"https://accredian-backend-task-sle1.onrender.com/api",
    withCredentials:true
})
