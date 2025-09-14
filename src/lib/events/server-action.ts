"use server";

import axiosInstance from "@/api/axiosInstance";
import { EventRegistration } from "@/types";
import { AxiosError } from "axios";

export const fetchEvents = async () => {
  const response = await axiosInstance.get("/events");
  return response.data;
};

export const createEvent = async (event: EventRegistration) => {
  try {
    const response = await axiosInstance.post("/registrations", event, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BACKEND_ADMIN_KEY}`,
      },
    });
    console.log("✅ Response", JSON.stringify(response.data, null, 2));
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    console.log("❌ Error", JSON.stringify(error, null, 2));
    return {
      status: error.status,
      error: error.message,
    };
  }
};
