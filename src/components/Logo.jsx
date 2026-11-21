export default function Logo({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* containment frame with cut corners */}
      <path
        d="M7 2H41L46 7V41L41 46H7L2 41V7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />

      {/* angular A / delta */}
      <path
        d="M12 36 24 10 36 36"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="miter"
      />
      <path d="M15.92 27.5H32.08" stroke="currentColor" strokeWidth="3.4" />

      {/* target node locked inside the counter */}
      <path
        data-node=""
        d="M24 29 26.9 31.9 24 34.8 21.1 31.9Z"
        fill="currentColor"
      />
    </svg>
  );
}
