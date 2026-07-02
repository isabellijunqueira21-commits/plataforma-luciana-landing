import { sans, serif } from "./fonts";

export default function HowItWorks() {
  return (
    <div
      id="como-funciona"
      data-screen-label="Como funciona"
      style={{ background: "#EDECDF", borderRadius: 48, margin: "0 20px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 44,
          }}
        >
          <span
            style={{
              font: `600 12px ${sans}`,
              color: "#7A8468",
              letterSpacing: "0.18em",
            }}
          >
            COMO FUNCIONA
          </span>
          <h2
            style={{ margin: 0, font: `500 clamp(28px, 3.2vw, 40px)/1.2 ${serif}` }}
          >
            Acompanhamento{" "}
            <em style={{ fontStyle: "italic", color: "#C08A80" }}>contínuo</em>,
            do seu jeito
          </h2>
          <p
            style={{
              margin: 0,
              font: `400 15.5px/1.6 ${sans}`,
              color: "#6B7263",
              maxWidth: 520,
            }}
          >
            Entre uma consulta e outra, o app mantém a gente por perto: você
            registra como se sentiu, assiste os materiais no seu tempo e vê sua
            evolução acontecer.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {/* 1 — Check-in */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                background: "#FBF8F2",
                borderRadius: 24,
                padding: 20,
                boxShadow: "0 8px 24px rgba(122,110,90,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span style={{ font: `400 13px ${sans}`, color: "#8A8578" }}>
                Como você se sentiu hoje?
              </span>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { emoji: "😔", bg: "#F5F1E8", active: false },
                  { emoji: "😐", bg: "#F5F1E8", active: false },
                  { emoji: "🙂", bg: "#D9A79E", active: true },
                  { emoji: "😄", bg: "#F5F1E8", active: false },
                ].map((m, i) => (
                  <div
                    key={i}
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 999,
                      background: m.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      boxShadow: m.active
                        ? "0 6px 16px rgba(217,167,158,0.4)"
                        : undefined,
                    }}
                  >
                    {m.emoji}
                  </div>
                ))}
              </div>
            </div>
            <span style={{ font: `500 15px ${serif}` }}>
              1 · Check-in diário de 1 minuto
            </span>
            <p
              style={{
                margin: 0,
                font: `400 13.5px/1.6 ${sans}`,
                color: "#6B7263",
              }}
            >
              Humor, energia e o que você quiser contar. Só a Luciana vê.
            </p>
          </div>

          {/* 2 — Materiais */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                background: "#FBF8F2",
                borderRadius: 24,
                padding: 20,
                boxShadow: "0 8px 24px rgba(122,110,90,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                {
                  title: "Fome emocional",
                  meta: "Vídeo · 8 min",
                  bg: "#E6EADB",
                  fill: "#606D59",
                },
                {
                  title: "Montando o prato",
                  meta: "Vídeo · 5 min",
                  bg: "#F3E3DF",
                  fill: "#A9766B",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 999,
                      background: v.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={v.fill}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ font: `500 14px ${serif}` }}>{v.title}</span>
                    <span
                      style={{ font: `400 11.5px ${sans}`, color: "#8A8578" }}
                    >
                      {v.meta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <span style={{ font: `500 15px ${serif}` }}>
              2 · Materiais no seu tempo
            </span>
            <p
              style={{
                margin: 0,
                font: `400 13.5px/1.6 ${sans}`,
                color: "#6B7263",
              }}
            >
              Vídeos e guias curtos da Luciana, pra ver quando fizer sentido.
            </p>
          </div>

          {/* 3 — Evolução */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                background: "#FBF8F2",
                borderRadius: 24,
                padding: 20,
                boxShadow: "0 8px 24px rgba(122,110,90,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <span style={{ font: `400 13px ${sans}`, color: "#8A8578" }}>
                Disposição · 30 dias
              </span>
              <svg
                width="100%"
                height="70"
                viewBox="0 0 260 70"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 55 C 26 52, 39 58, 60 50 S 104 38, 130 40 S 173 30, 199 25 S 238 18, 260 13 L 260 70 L 0 70 Z"
                  fill="#E6EADB"
                />
                <path
                  d="M0 55 C 26 52, 39 58, 60 50 S 104 38, 130 40 S 173 30, 199 25 S 238 18, 260 13"
                  fill="none"
                  stroke="#606D59"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="260"
                  cy="13"
                  r="4.5"
                  fill="#606D59"
                  stroke="#FBF8F2"
                  strokeWidth="2"
                />
              </svg>
              <div style={{ display: "flex", gap: 8 }}>
                <span
                  style={{
                    background: "#E6EADB",
                    borderRadius: 999,
                    padding: "5px 11px",
                    font: `600 12px ${sans}`,
                    color: "#606D59",
                  }}
                >
                  8/10 bem-estar
                </span>
                <span
                  style={{
                    background: "#F3E3DF",
                    borderRadius: 999,
                    padding: "5px 11px",
                    font: `600 12px ${sans}`,
                    color: "#A9766B",
                  }}
                >
                  +12% energia
                </span>
              </div>
            </div>
            <span style={{ font: `500 15px ${serif}` }}>
              3 · Evolução que você vê
            </span>
            <p
              style={{
                margin: 0,
                font: `400 13.5px/1.6 ${sans}`,
                color: "#6B7263",
              }}
            >
              Bem-estar e energia ao longo do tempo — nada de balança como
              medida de sucesso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
