import { LuCircleCheckBig, LuLock } from "react-icons/lu";
import type { AchievementData } from "../types";
import AchievementList from "./AchievementList";

export default function AchievementSection({
  data,
}: {
  data: AchievementData;
}) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <AchievementList
        title="Unlocked"
        items={data.unlocked_achievements}
        emptyMessage="No achievements yet."
        itemClassName="bg-green-50 text-green-700"
        icon={<LuCircleCheckBig className="h-5 w-5 text-green-600" />}
      />

      <AchievementList
        title="Up Next"
        items={data.next_available_achievements}
        emptyMessage="No upcoming achievements."
        itemClassName="bg-slate-100 text-slate-600"
        icon={<LuLock className="h-5 w-5 text-slate-400" />}
      />
    </section>
  );
}
