export type AchievementApiStatus = "success" | "error" | "loading";

export type AchievementData = {
  unlocked_achievements: string[];
  next_available_achievements: string[];
  current_badge: string;
  next_badge: string;
  remaining_to_unlock_next_badge: number;
};

export type AchievementApiResponse = {
  status: AchievementApiStatus;
  message: string;
  data?: AchievementData;
};
