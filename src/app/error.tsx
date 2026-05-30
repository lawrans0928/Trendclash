"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-gray-500 mb-4">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
}