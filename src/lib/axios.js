import axios from "axios";
export const axiosInstance = axios.create({
    baseURL:import.meta.env.MODE==="development"?"http://localhost:8000/api":"https://accredian-backend-task-k4dd6tazi-agrimgupta195s-projects.vercel.app/api",
    withCredentials:true
})