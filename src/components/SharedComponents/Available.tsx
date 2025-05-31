export default function Available() {
  return (
    <div className="flex items-center text-text-primary text-sm gap-[6px] font-semibold">
      <span className="relative flex size-3 items-center justify-center mt-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75"></span>
        <span className="relative inline-flex size-1 rounded-full bg-green"></span>
      </span>
      available for work
    </div>
  );
}
