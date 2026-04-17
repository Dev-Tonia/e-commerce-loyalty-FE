export default function Header({ message }: { message: string }) {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Rewards & Achievements
      </h1>
      <p className="mt-2 text-sm text-slate-500 max-w-md">{message}</p>
    </section>
  );
}
