import authHeader from "@/utils/header-utils";
import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  //   timeout: 10000,
  headers: authHeader(),
});

interface EventParams {
  creatorId?: string;
  page?: number;
  limit?: number;
  [key: string]: any;
}

const getRecentEvents = async (params?: EventParams) => {
  try {
    const response = await apiClient.get(
      "/event/get-recent-events-for-creator",
      { params }
    );
    if (response?.status === 200) {
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

const getAllEvents = async (params?: EventParams) => {
  try {
    const response = await apiClient.get("/event/get-all-events-for-creator", {
      params, // Pass the params object here
    });

    if (response?.status === 200) {
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

const EventService = { getRecentEvents, getAllEvents };

export default EventService;
