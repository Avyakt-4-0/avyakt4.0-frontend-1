"use server";

import axiosInstance from "@/api/axiosInstance";
import { EventRegistration } from "@/types";

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
    return response.data;
  } catch (error) {
    console.log("❌ Error", error);
    return error;
  }
};
