import { sans, serif } from "./fonts";
import { WHATSAPP_URL } from "@/lib/site";
import PhoneMockup from "./PhoneMockup";

const chip: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  background: "rgba(251,248,242,0.8)",
  border: "1px solid rgba(96,109,89,0.14)",
  borderRadius: 999,
  padding: "6px 13px",
  font: `500 12.5px ${sans}`,
  color: "#616E48",
};

const floatCard: React.CSSProperties = {
  position: "absolute",
  background: "rgba(251,248,242,0.75)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(96,109,89,0.14)",
  borderRadius: 20,
  padding: "14px 18px",
  boxShadow: "0 12px 30px rgba(96,109,89,0.14)",
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export default function Hero() {
  return (
    <div
      className="hero-grid"
      data-screen-label="Hero"
      style={{
        position: "relative",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "72px 32px 40px",
        display: "grid",
        gridTemplateColumns: "minmax(320px, 1.1fr) minmax(340px, 0.9fr)",
        gap: 48,
        alignItems: "center",
      }}
    >
      {/* Ambient radial glows */}
      <div
        style={{
          position: "absolute",
          top: -120,
          left: -180,
          width: 560,
          height: 560,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(184,195,165,0.4), rgba(184,195,165,0))",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 60,
          right: -160,
          width: 520,
          height: 520,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(217,167,158,0.32), rgba(217,167,158,0))",
          pointerEvents: "none",
        }}
      />

      {/* Left column — copy */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#DDE9C4",
            borderRadius: 999,
            padding: "7px 14px",
            alignSelf: "flex-start",
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
            Nutrição de acompanhamento contínuo
          </span>
        </div>
        <h1
          style={{
            margin: 0,
            font: `500 clamp(38px, 4.6vw, 58px)/1.12 ${serif}`,
            letterSpacing: "-0.01em",
          }}
        >
          Uma transformação{" "}
          <em style={{ fontStyle: "italic", color: "#587C34" }}>sustentável</em>{" "}
          começa com{" "}
          <em style={{ fontStyle: "italic", color: "#CC7A68" }}>cuidado</em>,
          não com castigo.
        </h1>
        <p
          style={{
            margin: 0,
            font: `400 17px/1.65 ${sans}`,
            color: "#616E48",
            maxWidth: 460,
          }}
        >
          Acompanhamento nutricional próximo, no seu ritmo: check-ins gentis,
          materiais no seu tempo e uma evolução que você consegue ver.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#587C34",
              color: "#FBF8F2",
              borderRadius: 999,
              padding: "15px 26px",
              font: `600 15px ${sans}`,
              textDecoration: "none",
              boxShadow: "0 10px 26px rgba(96,109,89,0.3)",
            }}
          >
            Agendar conversa
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FBF8F2"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
          <a
            href="#como-funciona"
            style={{
              font: `600 14px ${sans}`,
              color: "#587C34",
              textDecoration: "none",
              borderBottom: "1.5px solid rgba(96,109,89,0.35)",
              paddingBottom: 2,
            }}
          >
            Conhecer o acompanhamento
          </a>
        </div>
        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}
        >
          <span style={chip}>🌿 Sem dieta-castigo</span>
          <span style={chip}>💬 Contato próximo</span>
          <span style={chip}>📈 Evolução visível</span>
        </div>
      </div>

      {/* Right column — phone + floating glass stats */}
      <div
        className="hero-phone-wrap"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          minHeight: 640,
        }}
      >
        <div style={{ transform: "scale(0.72)", transformOrigin: "top center" }}>
          <PhoneMockup />
        </div>
        <div style={{ ...floatCard, top: 64, left: -14 }}>
          <span style={{ font: `600 26px ${serif}`, color: "#CC7A68" }}>
            6 dias
          </span>
          <span style={{ font: `500 11.5px ${sans}`, color: "#8A8578" }}>
            de streak seguidos
          </span>
        </div>
        <div style={{ ...floatCard, top: 250, right: -20 }}>
          <span style={{ font: `600 26px ${serif}`, color: "#587C34" }}>
            8/10
          </span>
          <span style={{ font: `500 11.5px ${sans}`, color: "#8A8578" }}>
            bem-estar médio
          </span>
        </div>
        <div style={{ ...floatCard, bottom: 96, left: 4 }}>
          <span style={{ font: `600 26px ${serif}`, color: "#6C7E45" }}>
            12
          </span>
          <span style={{ font: `500 11.5px ${sans}`, color: "#8A8578" }}>
            check-ins este mês
          </span>
        </div>
      </div>
    </div>
  );
}
