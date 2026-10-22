import React from "react";

/** Minimal mango (ambi) motif for Mysore silk border language. */
export function MangoMotif({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 40"
      width="28"
      height="40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 2.5C9.2 2.5 5.2 7.4 5.2 14.2c0 7.6 5.1 14.6 8.8 22.3.3.7 1.3.7 1.6 0 3.7-7.7 8.8-14.7 8.8-22.3C24.4 7.4 20.4 2.5 14 2.5Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.2c-2.4 0-4.3 2.4-4.3 5.4 0 3.8 2.4 7.4 4.3 11.4 1.9-4 4.3-7.6 4.3-11.4 0-3-1.9-5.4-4.3-5.4Z"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.7"
      />
      <circle cx="14" cy="12.5" r="1.15" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

/** Tiny diamond separator used between mango motifs. */
export function BorderDiamond({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 8 8"
      width="8"
      height="8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 0.8 7.2 4 4 7.2 0.8 4 4 0.8Z"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type BorderRailProps = {
  className?: string;
  count?: number;
};

/** Repeating mango border rail - top or bottom of a panel. */
export function MangoBorderRail({ className, count = 5 }: BorderRailProps) {
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={className} aria-hidden="true">
      {items.map((i) => (
        <React.Fragment key={i}>
          {i > 0 ? <BorderDiamond /> : null}
          <MangoMotif />
        </React.Fragment>
      ))}
    </div>
  );
}
