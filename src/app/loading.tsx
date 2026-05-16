export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="text-sm font-bold text-gray-500 animate-pulse tracking-widest uppercase">Loading...</p>
      </div>
    </div>
  );
}
