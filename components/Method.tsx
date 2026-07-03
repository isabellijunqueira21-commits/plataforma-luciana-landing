import { sans, serif } from "./fonts";

type Pillar = {
  num: string;
  numColor: string;
  icon: string;
  iconBg: string;
  title: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    num: "01",
    numColor: "#B0BAA3",
    icon: "🧭",
    iconBg: "#DDE9C4",
    title: "Mapeamento",
    body: "Entender sua rotina, sua relação com a comida e o que já funciona pra você — sem julgamento.",
  },
  {
    num: "02",
    numColor: "#E29A86",
    icon: "🌱",
    iconBg: "#F9DCD1",
    title: "Intervenção",
    body: "Mudanças pequenas e possíveis, ajustadas semana a semana com check-ins e contato próximo.",
  },
  {
    num: "03",
    numColor: "#6C7E45",
    icon: "🤲",
    iconBg: "#EDECDF",
    title: "Manutenção",
    body: "Autonomia de verdade: você sai sabendo se cuidar, com a Luciana por perto quando precisar.",
  },
];

export default function Method() {
  return (
    <div
      id="metodo"
      data-screen-label="O método"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: 40,
        }}
      >
        <span
          style={{
            font: `600 12px ${sans}`,
            color: "#6C7E45",
            letterSpacing: "0.18em",
          }}
        >
          O MÉTODO
        </span>
        <h2 style={{ margin: 0, font: `500 clamp(28px, 3.2vw, 40px)/1.2 ${serif}` }}>
          Três pilares,{" "}
          <em style={{ fontStyle: "italic", color: "#587C34" }}>um caminho</em>{" "}
          só seu
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {pillars.map((p) => (
          <div
            key={p.num}
            style={{
              background: "#FBF8F2",
              borderRadius: 28,
              padding: "32px 28px",
              boxShadow: "0 8px 26px rgba(122,110,90,0.09)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <span
              style={{
                font: `italic 500 15px ${serif}`,
                color: p.numColor,
              }}
            >
              {p.num}
            </span>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 16,
                background: p.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              {p.icon}
            </div>
            <span style={{ font: `500 22px ${serif}` }}>{p.title}</span>
            <p
              style={{
                margin: 0,
                font: `400 14.5px/1.6 ${sans}`,
                color: "#616E48",
              }}
            >
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
