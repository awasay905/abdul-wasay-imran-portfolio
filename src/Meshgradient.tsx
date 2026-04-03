/**
 * MeshGradient — animated floating blob background
 * Pure CSS @keyframes, no external library.
 * Uses hsl(var(--primary)) so it respects your shadcn theme.
 * Drop this inside any `relative` container and set z-index.
 */
export function MeshGradient() {
  return (
    <>
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          33%      { transform: translate(60px, -80px) scale(1.15); }
          66%      { transform: translate(-40px, 40px) scale(0.9); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          33%      { transform: translate(-70px, 60px) scale(1.1); }
          66%      { transform: translate(50px, -50px) scale(0.95); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          33%      { transform: translate(40px, 70px) scale(1.08); }
          66%      { transform: translate(-60px, -30px) scale(1.12); }
        }
        @keyframes blob4 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          50%      { transform: translate(-50px, -60px) scale(1.1); }
        }
        @keyframes blob5 {
          0%,100% { transform: translate(0px, 0px) scale(1.05); }
          50%      { transform: translate(70px, 40px) scale(0.95); }
        }
        .mesh-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.75;
          will-change: transform;
        }
        .dark .mesh-blob { opacity: 0.45; }
      `}</style>

      {/* Blob 1 — top-left, primary */}
      <div
        className="mesh-blob"
        style={{
          width: 700,
          height: 700,
          top: "-200px",
          left: "-120px",
          background: "color-mix(in oklch, var(--primary) 55%, transparent)",
          animation: "blob1 14s ease-in-out infinite",
        }}
      />
      {/* Blob 2 — top-right */}
      <div
        className="mesh-blob"
        style={{
          width: 560,
          height: 560,
          top: "-80px",
          right: "-80px",
          background: "color-mix(in oklch, var(--primary) 28%, transparent)",
          animation: "blob2 18s ease-in-out infinite",
        }}
      />
      {/* Blob 3 — mid-left */}
      <div
        className="mesh-blob"
        style={{
          width: 420,
          height: 420,
          bottom: "60px",
          left: "15%",
          background: "color-mix(in oklch, var(--primary) 20%, transparent)",
          animation: "blob3 22s ease-in-out infinite",
        }}
      />
      {/* Blob 4 — center */}
      <div
        className="mesh-blob"
        style={{
          width: 380,
          height: 380,
          top: "25%",
          left: "42%",
          background: "color-mix(in oklch, var(--primary) 14%, transparent)",
          animation: "blob4 16s ease-in-out infinite",
        }}
      />
      {/* Blob 5 — bottom-right */}
      <div
        className="mesh-blob"
        style={{
          width: 480,
          height: 480,
          bottom: "-100px",
          right: "0%",
          background: "color-mix(in oklch, var(--primary) 22%, transparent)",
          animation: "blob5 20s ease-in-out infinite",
        }}
      />
    </>
  );
}