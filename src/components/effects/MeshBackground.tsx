"use client";

export function MeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-navy" />

      <div
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-[120px] animate-mesh-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] animate-mesh-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 70%)",
          animationDelay: "-10s",
        }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px] animate-mesh-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)",
          animationDelay: "-5s",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(241, 245, 249, 0.8) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
