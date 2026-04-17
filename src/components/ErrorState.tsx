export default function ErrorState({ message }: { message: string }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-sm">
        <p className="text-lg font-semibold text-red-600">
          Failed to load achievement data.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          {message || "Please try again later."}
        </p>
      </div>
    </main>
  );
}
