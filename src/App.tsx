import AchievementDashboard from "./components/AchievementDashboard";
import type { AchievementApiResponse } from "./types";

export default function App() {
  return <AchievementDashboard apiData={mockResponse} />;
}

/* ================= MOCK ================= */

const mockResponse: AchievementApiResponse = {
  status: "success",
  message: "Track customer loyalty and reward progress seamlessly.",
  data: {
    unlocked_achievements: ["First Purchase", "5 Purchases"],
    next_available_achievements: [
      "10 Purchases",
      "25 Purchases",
      "50 Purchases",
    ],
    current_badge: "Bronze",
    next_badge: "Silver",
    remaining_to_unlock_next_badge: 2,
  },
};
