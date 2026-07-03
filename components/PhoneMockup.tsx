import { sans, serif } from "./fonts";

/* iOS status bar — 9:41 + cellular / wifi / battery, reproduced from the
   ios-frame.jsx spec used in the design prototype. */
function StatusBar() {
  const c = "#000";
  return (
    <div
      style={{
        display: "flex",
        gap: 154,
        alignItems: "center",
        justifyContent: "center",
        padding: "21px 24px 19px",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 20,
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          height: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 1.5,
        }}
      >
        <span
          style={{
            fontFamily: '-apple-system, "SF Pro", system-ui',
            fontWeight: 590,
            fontSize: 17,
            lineHeight: "22px",
            color: c,
          }}
        >
          9:41
        </span>
      </div>
      <div
        style={{
          flex: 1,
          height: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          paddingTop: 1,
          paddingRight: 1,
        }}
      >
        <svg width="19" height="12" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c} />
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c} />
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c} />
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c} />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path
            d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z"
            fill={c}
          />
          <path
            d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z"
            fill={c}
          />
          <circle cx="8.5" cy="10.5" r="1.5" fill={c} />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="12"
            rx="3.5"
            stroke={c}
            strokeOpacity="0.35"
            fill="none"
          />
          <rect x="2" y="2" width="20" height="9" rx="2" fill={c} />
          <path
            d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z"
            fill={c}
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}

/* The app "Início" screen exactly as it appears inside the hero mockup. */
function AppScreen() {
  return (
    <div
      style={{
        height: "100%",
        background: "#F5F1E8",
        display: "flex",
        flexDirection: "column",
        fontFamily: sans,
        color: "#3A3A32",
      }}
    >
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Olive header */}
        <div
          style={{
            background: "#587C34",
            borderRadius: "0 0 32px 32px",
            padding: "62px 22px 26px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ font: `500 28px ${serif}`, color: "#FBF8F2" }}>
                Oi, Marina
              </span>
              <span style={{ font: `400 13px ${sans}`, color: "#DFE4D3" }}>
                Dia 12 da sua jornada
              </span>
            </div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 999,
                background: "#FBF8F2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: `500 16px ${serif}`,
                color: "#587C34",
              }}
            >
              M
            </div>
          </div>
          <div
            style={{
              background: "#FBF8F2",
              borderRadius: 24,
              padding: 20,
              boxShadow: "0 10px 26px rgba(66,76,58,0.18)",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <svg width="104" height="104" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#E9E4D8"
                strokeWidth="10"
              />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#E29A86"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="131 327"
                transform="rotate(-90 60 60)"
              />
              <text
                x="60"
                y="66"
                textAnchor="middle"
                style={{ font: `600 22px ${serif}`, fill: "#3A3A32" }}
              >
                40%
              </text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ font: `500 19px ${serif}` }}>Sua jornada</span>
              <span style={{ font: `400 13px ${sans}`, color: "#8A8578" }}>
                Dia 12 de 30
              </span>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#F9DCD1",
                  borderRadius: 999,
                  padding: "6px 12px",
                  alignSelf: "flex-start",
                }}
              >
                <span style={{ fontSize: 13 }}>🔥</span>
                <span style={{ font: `600 12px ${sans}`, color: "#B46853" }}>
                  6 dias seguidos
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Body cards */}
        <div
          style={{
            padding: "18px 22px 0",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div
            style={{
              background: "#FBF8F2",
              borderRadius: 24,
              padding: "20px 22px",
              boxShadow: "0 6px 20px rgba(122,110,90,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span style={{ font: `500 19px ${serif}` }}>Check-in de hoje</span>
            <span style={{ font: `400 13px ${sans}`, color: "#8A8578" }}>
              Leva 1 minuto — um momento só seu.
            </span>
            <div
              style={{
                background: "#E29A86",
                color: "#FFFAF8",
                borderRadius: 999,
                padding: 13,
                textAlign: "center",
                font: `600 14px ${sans}`,
                boxShadow: "0 8px 20px rgba(217,167,158,0.35)",
              }}
            >
              Responder
            </div>
          </div>
          <div
            style={{
              background: "#FBF8F2",
              borderRadius: 24,
              padding: "18px 22px",
              boxShadow: "0 6px 20px rgba(122,110,90,0.1)",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 16,
                background: "#DDE9C4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              🌿
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ font: `600 14px ${sans}` }}>
                Um lembrete gentil
              </span>
              <span style={{ font: `400 12.5px ${sans}`, color: "#8A8578" }}>
                Comer bem é cuidado, não castigo.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Tab bar */}
      <div
        style={{
          margin: "0 40px 28px",
          background: "#587C34",
          borderRadius: 999,
          padding: "12px 26px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 10px 24px rgba(66,76,58,0.3)",
        }}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FBF8F2"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
        </svg>
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B0BAA3"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M5 20V12" />
          <path d="M12 20V6" />
          <path d="M19 20v-4" />
        </svg>
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B0BAA3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M6 3h12v6a6 6 0 0 1-12 0z" />
          <path d="M6 5H3v2a4 4 0 0 0 3 3.9" />
          <path d="M18 5h3v2a4 4 0 0 1-3 3.9" />
        </svg>
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B0BAA3"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
        </svg>
      </div>
    </div>
  );
}

/* The full device frame at its native 402×874. The hero scales it down. */
export default function PhoneMockup() {
  return (
    <div
      style={{
        width: 402,
        height: 874,
        borderRadius: 48,
        overflow: "hidden",
        position: "relative",
        background: "#F2F2F7",
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)",
        fontFamily: "-apple-system, system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Dynamic island */}
      <div
        style={{
          position: "absolute",
          top: 11,
          left: "50%",
          transform: "translateX(-50%)",
          width: 126,
          height: 37,
          borderRadius: 24,
          background: "#000",
          zIndex: 50,
        }}
      />
      {/* Status bar */}
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}
      >
        <StatusBar />
      </div>
      {/* Screen content */}
      <div
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: 1, overflow: "hidden" }}>
          <AppScreen />
        </div>
      </div>
      {/* Home indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          height: 34,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: 8,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 139,
            height: 5,
            borderRadius: 100,
            background: "rgba(0,0,0,0.25)",
          }}
        />
      </div>
    </div>
  );
}
