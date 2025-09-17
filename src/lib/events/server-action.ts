"use server";

import axiosInstance from "@/api/axiosInstance";
import { EventRegistration } from "@/types";

export const fetchEvents = async () => {
  const response = await axiosInstance.get("/events");
  return response.data;
};

export const createEvent = async (event: EventRegistration) => {
  try {
    const members = event?.members?.filter((x) => !!x.email);
    const response = await fetch(
      `${process.env.BACKEND_API_ENDPOINT}/registrations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BACKEND_ADMIN_KEY}`,
        },
        body: JSON.stringify({
          ...event,
          members,
        }),
      }
    );

    const data = await response.json();
    console.log("✅ Response:", JSON.stringify(data, null, 2));

    if (data.no) {
      return {
        success: true,
        message: "Registered successfully",
        registrationId: data.no,
      };
    }

    if (data.duplicate && event.leadEmail === data.email) {
      return {
        success: false,
        message: "You have already registered for this event",
      };
    } else if (data.duplicate && event.leadEmail !== data.email) {
      return {
        success: false,
        message: "All members email should be unique",
      };
    }
    if (data.message) {
      return {
        success: false,
        message: data.message,
      };
    }

    return {
      success: false,
      message: "Something went wrong",
    };
  } catch (error: any) {
    console.error("❌ Error:", error);
    return {
      success: false,
      message: error.message || "Unexpected error occurred",
    };
  }
};

export const getRegistrationDetails = async (email: string) => {
  const response = await fetch(
    `${process.env.BACKEND_API_ENDPOINT}/registrations/user/${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BACKEND_ADMIN_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
