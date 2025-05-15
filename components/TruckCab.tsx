// components/TruckCab.tsx
export default function TruckCab({ direction = "right" }: { direction?: "left" | "right" }) {
  const flip = direction === "left" ? "-scale-x-100" : "";

  return (
    <svg
      className={`w-10 h-10 ${flip}`}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="24" width="30" height="20" rx="2" fill="#4B5563" />
      <rect x="32" y="28" width="20" height="16" rx="2" fill="#6B7280" />
      <rect x="34" y="30" width="6" height="6" rx="1" fill="white" />
      <circle cx="10" cy="46" r="4" fill="black" />
      <circle cx="44" cy="46" r="4" fill="black" />
    </svg>
  );
}

