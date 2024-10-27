import authHeader from "@/utils/header-utils";
import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  //   timeout: 10000,
  headers: authHeader(),
});
const getUserDetails = async () => {
  try {
    const response = await apiClient.get("/user/profile");
    console.log(response);
    if (response.status === 200) {
      return {
        status: response?.status,
        data: response?.data,
      };
    } else {
      return { status: response?.status, message: response?.data?.message };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Fetch failed");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

const UserService = {
  getUserDetails,
};

export default UserService;
