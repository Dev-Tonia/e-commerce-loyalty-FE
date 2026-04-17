import type { AchievementData } from "../types";
import { LuTrophy } from "react-icons/lu";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
function calculateProgress(remainingPurchases: number) {
  return clamp(100 - remainingPurchases * 15, 10, 100);
}
export default function ProgressCard({ data }: { data: AchievementData }) {
  const progress = calculateProgress(data.remaining_to_unlock_next_badge);

  return (
    <section className="rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md">
          <LuTrophy className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm text-slate-500">Loyalty Progress</p>
          <h2 className="text-lg font-semibold text-slate-900">
            {data.current_badge} → {data.next_badge}
          </h2>
        </div>
      </div>

      <div className="mb-4 text-sm text-slate-600">
        {data.remaining_to_unlock_next_badge} purchase
        {data.remaining_to_unlock_next_badge !== 1 ? "s" : ""} left to unlock{" "}
        <span className="font-medium text-slate-900">{data.next_badge}</span>
      </div>

      {/* Progress */}
      <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-green-500 to-emerald-600 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-2 text-xs text-slate-400">{progress}% complete</div>
    </section>
  );
}
