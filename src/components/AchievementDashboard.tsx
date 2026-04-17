import Header from "./Header";
import ProgressCard from "./ProgressCard";
import AchievementSection from "./AchievementSection";
import ErrorState from "./ErrorState";
import type { AchievementApiResponse } from "../types";
export default function AchievementDashboard({
  apiData,
}: {
  apiData: AchievementApiResponse;
}) {
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
