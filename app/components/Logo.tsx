import Image from "next/image";

export function Logo({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H9l-4 3.5v-3.5H5.5C4.67 15 4 14.33 4 13.5v-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="10.4" y="8.1" width="5.2" height="4.2" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M11.6 8.1V6.9a1.3 1.3 0 1 1 2.6 0v1.2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function LogoCube() {
  const faces = [
    "translateZ(14px)",
    "rotateY(180deg) translateZ(14px)",
    "rotateY(-90deg) translateZ(14px)",
    "rotateY(90deg) translateZ(14px)",
    "rotateX(90deg) translateZ(14px)",
    "rotateX(-90deg) translateZ(14px)",
  ];

  return (
    <div style={{ perspective: "224px" }} aria-hidden="true">
      <div
        style={{
          width: 29,
          height: 29,
          position: "relative",
          transformStyle: "preserve-3d",
          animation: "hv-cube-rotate 8s linear infinite",
          willChange: "transform",
        }}
      >
        {faces.map((transform) => (
          <div
            key={transform}
            style={{
              position: "absolute",
              width: 29,
              height: 29,
              overflow: "hidden",
              border: "1px solid rgba(0,212,255,0.5)",
              background: "#06101e",
              transform,
              backfaceVisibility: "hidden",
            }}
          >
            <Image src="/icon-512x512.png" alt="" fill sizes="29px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
