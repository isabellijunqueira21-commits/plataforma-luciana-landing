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

/* Foto do Diferencial — a Luciana (fornecida por ela). Fica em `public/`. */
function DiferencialFoto() {
  return (
    <img
      src="/luciana-diferencial.jpg"
      alt="Luciana Junqueira, nutricionista"
      style={{
        width: "100%",
        height: 420,
        objectFit: "cover",
        objectPosition: "center 40%",
        borderRadius: 32,
        display: "block",
        border: "1px solid rgba(96,109,89,0.18)",
      }}
    />
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
      <DiferencialFoto />
    </div>
  );
}
