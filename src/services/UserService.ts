import authHeader from "@/utils/header-utils";
import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  //   timeout: 10000,
  headers: authHeader(),
});
const login = async (credentials: any) => {
  try {
    const response = await apiClient.post("/auth/login", credentials);
    // console.log(response);
    if (response.status === 200) {
      return {
        status: response?.status,
        token: response?.data?.token,
        message: response?.data?.message,
      };
    } else {
      return { status: response?.status, message: response?.data?.message };
    }
  } catch (error) {
    // Handle error appropriately
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Login failed");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

const UserService = {
  login,
  // logout,
  // register,
  // forgotPasswordRequest,
  // resetPasswordRequest,
  // resendVerifyEmail,
};

export default UserService;
