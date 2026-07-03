import { sans, serif } from "./fonts";

const quotes = [
  "Espaço para o depoimento de uma paciente — a primeira vez em que cuidar da alimentação não pareceu punição.",
  "Espaço para o depoimento de uma paciente — sobre constância, check-ins e sentir-se acompanhada de verdade.",
  "Espaço para o depoimento de uma paciente — sobre energia, bem-estar e uma relação nova com a comida.",
];

export default function Testimonials() {
  return (
    <div
      id="depoimentos"
      data-screen-label="Depoimentos"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 88px" }}
    >
      <div
        style={{
          background: "#587C34",
          borderRadius: 40,
          padding: "64px 48px",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              margin: 0,
              font: `500 clamp(26px, 3vw, 36px)/1.25 ${serif}`,
              color: "#FBF8F2",
              maxWidth: 420,
            }}
          >
            Quem caminha com a{" "}
            <em style={{ fontStyle: "italic", color: "#E29A86" }}>Luciana</em>
          </h2>
          <div style={{ display: "flex", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ font: `600 40px ${serif}`, color: "#FBF8F2" }}>
                120+
              </span>
              <span style={{ font: `500 12.5px ${sans}`, color: "#CBD2BE" }}>
                pacientes acompanhadas
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ font: `600 40px ${serif}`, color: "#FBF8F2" }}>
                92%
              </span>
              <span style={{ font: `500 12.5px ${sans}`, color: "#CBD2BE" }}>
                seguem após 3 meses
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {quotes.map((q, i) => (
            <div
              key={i}
              style={{
                background: "rgba(251,248,242,0.1)",
                border: "1px solid rgba(251,248,242,0.16)",
                borderRadius: 24,
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <p
                style={{
                  margin: 0,
                  font: `italic 400 16px/1.6 ${serif}`,
                  color: "#FBF8F2",
                }}
              >
                &ldquo;{q}&rdquo;
              </p>
              <span style={{ font: `500 13px ${sans}`, color: "#CBD2BE" }}>
                Nome · tempo de acompanhamento
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
