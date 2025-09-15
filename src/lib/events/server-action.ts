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
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    console.log("❌ Error", JSON.stringify(error, null, 2));
    return {
      status: error.status,
      error: error.message,
      // ...error.response,
    };
  }
};

export const createEvent1 = async (event: EventRegistration) => {
  console.log("Event", JSON.stringify(event, null, 2));
  try {
    const response = await fetch(
      `${process.env.BACKEND_API_ENDPOINT}/registrations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BACKEND_ADMIN_KEY}`,
        },
        body: JSON.stringify(event),
      }
    );
    const data = await response.json();
    console.log("✅ Response", JSON.stringify(data, null, 2));
    //  return {
    //      status: response.status,
    //      data: data,
    //  }
  } catch (error: any) {
    console.log("❌ Error", error);
    // return {
    //     status: error.status,
    //     error: error.message,
    //     // ...error.response,
    // };
  }
};
