export function SunburstIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 17.75L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 3L12 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17.75 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12L6.25 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16.2426 16.2426L18.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.5 5.5L7.75736 7.75736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16.2426 7.75736L18.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.5 18.5L7.75736 16.2426" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
