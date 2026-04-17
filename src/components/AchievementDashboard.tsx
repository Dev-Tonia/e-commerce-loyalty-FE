import { useEffect, useState } from "react";

import Header from "./Header";
import ProgressCard from "./ProgressCard";
import AchievementSection from "./AchievementSection";
import ErrorState from "./ErrorState";

import type { AchievementApiResponse } from "../types";
import { fetchUserAchievements } from "../services/achievementService";

export default function AchievementDashboard() {
  const [apiData, setApiData] = useState<AchievementApiResponse>({
    status: "loading",
    message: "Loading...",
  });

  useEffect(() => {
    let isMounted = true;

    async function loadAchievements() {
      const data = await fetchUserAchievements(1);

      // prevents state update if component unmounts
      if (isMounted) {
        setApiData(data);
      }
    }

    loadAchievements();

    return () => {
      isMounted = false;
    };
  }, []);

  //  Error state
  if (apiData.status === "error" || !apiData.data) {
    return <ErrorState message={apiData.message} />;
  }

  // ⏳ Loading state
  if (apiData.status === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500 animate-pulse">
          Loading achievements...
        </p>
      </main>
    );
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
