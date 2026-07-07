import Image from "next/image";
import { sans } from "./fonts";
import { WHATSAPP_URL, PLATFORM_URL } from "@/lib/site";
import logoOlive from "@/public/assets/logo-olive.png";

const navLink: React.CSSProperties = {
  font: `500 13.5px ${sans}`,
  color: "#6B7263",
  textDecoration: "none",
};

export default function Nav() {
  return (
    <div
      style={{
        position: "sticky",
        top: 16,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          background: "rgba(251,248,242,0.85)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(96,109,89,0.12)",
          borderRadius: 999,
          padding: "10px 12px 10px 20px",
          boxShadow: "0 8px 30px rgba(96,109,89,0.12)",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={logoOlive}
            alt="Luciana Junqueira · Nutricionista"
            style={{ height: 30, width: "auto", display: "block" }}
            priority
          />
        </a>
        <div className="nav-links" style={{ display: "flex", gap: 20 }}>
          <a href="#metodo" style={navLink}>
            O método
          </a>
          <a href="#como-funciona" style={navLink}>
            Como funciona
          </a>
          <a href="#depoimentos" style={navLink}>
            Depoimentos
          </a>
        </div>
        <a
          href={PLATFORM_URL}
          style={{
            display: "flex",
            alignItems: "center",
            background: "transparent",
            color: "#606D59",
            border: "1px solid rgba(96,109,89,0.4)",
            borderRadius: 999,
            padding: "9px 16px",
            font: `600 13.5px ${sans}`,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Área do paciente
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#606D59",
            color: "#FBF8F2",
            borderRadius: 999,
            padding: "10px 18px",
            font: `600 13.5px ${sans}`,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Agendar conversa
          <svg
            width="14"
            height="14"
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
      </div>
    </div>
  );
}
