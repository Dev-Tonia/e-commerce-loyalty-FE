import type { AchievementApiResponse } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchUserAchievements(
  userId: number,
): Promise<AchievementApiResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/users/${userId}/achievements`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch achievements");
    }

    return await response.json();
  } catch (error: any) {
    return {
      status: "error",
      message: error.message || "Something went wrong",
    };
  }
}
