import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  //   timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  status: number;
  token?: string;
  message: String;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  token?: string;
}

const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<ApiResponse<LoginResponse>>(
      "/auth/login",
      credentials
    );
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

const AuthService = {
  login,
  // logout,
  // register,
  // forgotPasswordRequest,
  // resetPasswordRequest,
  // resendVerifyEmail,
};

export default AuthService;
