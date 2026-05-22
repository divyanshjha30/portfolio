export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#060610] overflow-hidden">
      {/* Cyan blob — top left */}
      <div
        className="absolute -top-1/3 -left-1/4 w-[70vw] h-[70vh] rounded-full pointer-events-none animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      {/* Violet blob — center right */}
      <div
        className="absolute top-1/4 -right-1/4 w-[60vw] h-[60vh] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)",
          filter: "blur(90px)",
          animation: "float-slow 18s ease-in-out infinite reverse",
        }}
      />
      {/* Pink blob — bottom center */}
      <div
        className="absolute -bottom-1/4 left-1/4 w-[50vw] h-[50vh] rounded-full pointer-events-none animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      {/* Green accent — bottom right */}
      <div
        className="absolute bottom-0 -right-1/6 w-[35vw] h-[35vh] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,163,0.04) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: "float 10s ease-in-out infinite 3s",
        }}
      />
      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};
