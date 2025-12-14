export default function TextArrow({ children, pixels = 2, color = 'emerald' }) {
  return (
    <div className="flex w-full items-center">
      <div className="flex items-center gap-3">
        <span
          className={`font-pixel text-4xl leading-none text-${color}-500 inline-block`}
          style={{ transform: `translateY(-${pixels}px)` }}
        >
          {`>`}
        </span>

        <span className="leading-none uppercase">
          {children}
        </span>
      </div>
    </div>
  );
}
