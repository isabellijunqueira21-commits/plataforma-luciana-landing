import Image from "next/image";
import { sans, serif } from "./fonts";
import { WHATSAPP_URL } from "@/lib/site";
import logoOlive from "@/public/assets/logo-olive.png";

const infoRows = [
  {
    text: "30 minutos",
    bg: "#DDE9C4",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#587C34"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    text: "Pelo WhatsApp ou chamada de vídeo",
    bg: "#F9DCD1",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B46853"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5z" />
      </svg>
    ),
  },
  {
    text: "Horário de Brasília",
    bg: "#EDECDF",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C7E45"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9s1.3-6.6 3.8-9z" />
      </svg>
    ),
  },
];

// July 2026 starts on a Wednesday (Sun-first grid → 3 leading blanks).
// This is a visual mock: only the first three weeks are shown, day 7 is the
// selected slot, and 1/2/12/19 render muted, exactly as in the design.
const LEADING_BLANKS = 3;
const DAYS = Array.from({ length: 21 }, (_, i) => i + 1);
const MUTED = new Set([1, 2, 12, 19]);
const SELECTED = 7;

function CalendarDay({ day }: { day: number }) {
  const base: React.CSSProperties = {
    aspectRatio: "1",
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  if (day === SELECTED) {
    return (
      <div
        style={{
          ...base,
          background: "#587C34",
          font: `600 13.5px ${sans}`,
          color: "#FBF8F2",
          boxShadow: "0 6px 16px rgba(96,109,89,0.35)",
        }}
      >
        {day}
      </div>
    );
  }
  return (
    <div
      style={{
        ...base,
        border: "1px solid #EDE8DC",
        font: `500 13.5px ${sans}`,
        color: MUTED.has(day) ? "#B9B2A3" : undefined,
      }}
    >
      {day}
    </div>
  );
}

export default function Booking() {
  return (
    <div
      id="agendar"
      data-screen-label="CTA final"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 96px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          marginBottom: 40,
          maxWidth: 560,
        }}
      >
        <span
          style={{
            font: `600 12px ${sans}`,
            color: "#6C7E45",
            letterSpacing: "0.18em",
          }}
        >
          AGENDE UMA CONVERSA
        </span>
        <h2 style={{ margin: 0, font: `500 clamp(30px, 3.6vw, 46px)/1.2 ${serif}` }}>
          Uma conversa de{" "}
          <em style={{ fontStyle: "italic", color: "#587C34" }}>30 minutos</em>,
          sem compromisso.
        </h2>
        <p style={{ margin: 0, font: `400 16px/1.6 ${sans}`, color: "#616E48" }}>
          A gente entende o seu momento e você conhece como o acompanhamento
          funciona. Escolha o melhor dia pra você.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {/* Info card */}
        <div
          style={{
            background: "#FBF8F2",
            borderRadius: 32,
            padding: "36px 32px",
            boxShadow: "0 8px 26px rgba(122,110,90,0.09)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <Image
            src={logoOlive}
            alt="Luciana Junqueira · Nutricionista"
            style={{
              width: 200,
              height: "auto",
              display: "block",
              marginBottom: 6,
            }}
          />
          {infoRows.map((r) => (
            <div
              key={r.text}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: r.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {r.icon}
              </div>
              <span style={{ font: `500 14.5px ${sans}` }}>{r.text}</span>
            </div>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: "#587C34",
              color: "#FBF8F2",
              borderRadius: 999,
              padding: "16px 28px",
              font: `600 15px ${sans}`,
              textDecoration: "none",
              boxShadow: "0 10px 26px rgba(96,109,89,0.3)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FBF8F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
            Agendar pelo WhatsApp
          </a>
          <span
            style={{
              font: `400 12px ${sans}`,
              color: "#B0BAA3",
              textAlign: "center",
            }}
          >
            Sem compromisso — é só uma conversa. 💛
          </span>
        </div>

        {/* Calendar */}
        <div
          style={{
            background: "#FBF8F2",
            borderRadius: 32,
            padding: 32,
            boxShadow: "0 8px 26px rgba(122,110,90,0.09)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: "#F5F1E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8A8578"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 6-6 6 6 6" />
              </svg>
            </div>
            <span style={{ font: `500 19px ${serif}` }}>Julho 2026</span>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: "#F5F1E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8A8578"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 6 6 6-6 6" />
              </svg>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 8,
            }}
          >
            {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
              <span
                key={i}
                style={{
                  font: `600 11px ${sans}`,
                  color: "#B9B2A3",
                  textAlign: "center",
                }}
              >
                {d}
              </span>
            ))}
            {Array.from({ length: LEADING_BLANKS }, (_, i) => (
              <span key={`blank-${i}`} />
            ))}
            {DAYS.map((day) => (
              <CalendarDay key={day} day={day} />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#DDE9C4",
              borderRadius: 999,
              padding: "9px 16px",
              alignSelf: "center",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: "#587C34",
              }}
            />
            <span style={{ font: `500 12.5px ${sans}`, color: "#587C34" }}>
              Terça, 7 de julho · horários à tarde disponíveis
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 48 }}
      >
        <span style={{ font: `400 12.5px ${sans}`, color: "#B0BAA3" }}>
          Luciana Junqueira · Nutricionista · CRN 00000
        </span>
      </div>
    </div>
  );
}
