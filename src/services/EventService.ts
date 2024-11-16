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
  eventId?: any;
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

const getAllEventsByAdmin = async (params?: EventParams) => {
  try {
    const response = await apiClient.get("/admin/event/get-events-by-admin", {
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

const getEventByIdForAdmin = async (params?: EventParams) => {
  try {
    const response = await apiClient.get(
      `/admin/event/get-events-by-id/${params?.eventId}`,
      {
        params, // Pass the params object here
      }
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

const EventService = {
  getRecentEvents,
  getAllEventsByAdmin,
  getEventByIdForAdmin,
};

export default EventService;
