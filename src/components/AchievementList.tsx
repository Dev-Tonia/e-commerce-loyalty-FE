import { type ReactNode } from "react";

export default function AchievementList({
  title,
  items,
  emptyMessage,
  icon,
  itemClassName,
}: {
  title: string;
  items: string[];
  emptyMessage: string;
  icon: ReactNode;
  itemClassName: string;
}) {
  return (
    <div className="space-y-3">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        {icon}
        {title}
      </h2>

      {items.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {items.map((achievement) => (
            <span
              key={achievement}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${itemClassName}`}
            >
              {achievement}
            </span>
          ))}
        </div>
      ) : (
        <div className="text-sm text-slate-400">{emptyMessage}</div>
      )}
    </div>
  );
}
