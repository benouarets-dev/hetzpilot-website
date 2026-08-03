import { ImageResponse } from "next/og"

export const alt = "HetzPilot — Hetzner Cloud management for iPhone"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#f4f6f8",
        color: "#111317",
        fontFamily: "Arial, sans-serif",
        padding: "72px 78px",
      }}
    >
      <div
        style={{
          width: 520,
          height: 520,
          position: "absolute",
          top: -300,
          right: -110,
          borderRadius: 520,
          background: "#d50f2e",
          filter: "blur(82px)",
          opacity: 0.24,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 27, fontWeight: 700 }}>
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "linear-gradient(145deg, #ec2340, #b40722)",
              color: "white",
              fontSize: 23,
              boxShadow: "0 12px 28px rgba(181,7,34,.25)",
            }}
          >
            HP
          </div>
          HetzPilot
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#d50f2e", fontSize: 17, fontWeight: 700, letterSpacing: 3 }}>
            NATIVE iOS APP FOR IPHONE
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 20, fontSize: 78, fontWeight: 700, lineHeight: 0.98, letterSpacing: -5 }}>
            <span>Hetzner Cloud.</span>
            <span>Within reach.</span>
          </div>
          <div style={{ marginTop: 28, color: "#626873", fontSize: 25 }}>
            Monitor servers. Manage infrastructure. Stay in control.
          </div>
        </div>
      </div>
    </div>,
    size,
  )
}
