import { sans, serif } from "./fonts";

const checks = [
  { text: "Mensagens e ajustes entre as consultas", bg: "#E6EADB", stroke: "#606D59" },
  { text: "Constância celebrada, deslizes acolhidos", bg: "#F3E3DF", stroke: "#A9766B" },
  {
    text: "Privacidade: no ranking, você escolhe seu apelido",
    bg: "#EDECDF",
    stroke: "#7A8468",
  },
];

/* Visible, in-brand placeholder for the "diferencial" photo. Swap this block
   for a real <Image> once Luciana provides a photo — guideline: comida de
   verdade, natureza, calma (nada de corpo ou balança). */
function PhotoPlaceholder() {
  return (
    <div
      style={{
        width: "100%",
        height: 420,
        borderRadius: 32,
        background: "#EFEBDF",
        border: "1.5px dashed rgba(96,109,89,0.35)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        textAlign: "center",
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8468"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.7 }}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span
        style={{
          font: `500 13.5px ${sans}`,
          color: "#7A8468",
          maxWidth: 260,
          lineHeight: 1.5,
        }}
      >
        Foto: comida de verdade, mesa, natureza ou a Luciana atendendo
      </span>
    </div>
  );
}

export default function Difference() {
  return (
    <div
      data-screen-label="Diferencial"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "88px 32px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 48,
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span
          style={{
            font: `600 12px ${sans}`,
            color: "#7A8468",
            letterSpacing: "0.18em",
          }}
        >
          POR QUE É DIFERENTE
        </span>
        <h2 style={{ margin: 0, font: `500 clamp(28px, 3.2vw, 40px)/1.2 ${serif}` }}>
          Perto de verdade,{" "}
          <em style={{ fontStyle: "italic", color: "#606D59" }}>leve</em> de
          verdade
        </h2>
        <p
          style={{
            margin: 0,
            font: `400 15.5px/1.65 ${sans}`,
            color: "#6B7263",
          }}
        >
          Aqui não existe dieta-castigo, foto de antes e depois nem cobrança por
          número na balança. Existe acompanhamento próximo, uma gamificação
          gentil que celebra constância — check-ins, streaks e um ranking por
          apelido — e um plano que respeita a sua vida real.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {checks.map((c) => (
            <div
              key={c.text}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  background: c.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={c.stroke}
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </div>
              <span style={{ font: `500 14.5px ${sans}` }}>{c.text}</span>
            </div>
          ))}
        </div>
      </div>
      <PhotoPlaceholder />
    </div>
  );
}
