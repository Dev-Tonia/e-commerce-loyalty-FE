import Header from "./Header";
import ProgressCard from "./ProgressCard";
import AchievementSection from "./AchievementSection";
import ErrorState from "./ErrorState";
import type { AchievementApiResponse } from "../types";
export default function AchievementDashboard() {
  const apiData: AchievementApiResponse = mockResponse;
  if (apiData.status !== "success" || !apiData.data) {
    return <ErrorState message={apiData.message} />;
  }

  const { data, message } = apiData;

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white px-4 py-10">
      <div className="mx-auto max-w-3xl space-y-8">
        <Header message={message} />

        <ProgressCard data={data} />

        <AchievementSection data={data} />
      </div>
    </main>
  );
}
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
