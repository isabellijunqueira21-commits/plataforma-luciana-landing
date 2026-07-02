import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import HowItWorks from "@/components/HowItWorks";
import Difference from "@/components/Difference";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F5F1E8",
        color: "#3A3A32",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />
      <Method />
      <HowItWorks />
      <Difference />
      <Testimonials />
      <Booking />
    </main>
  );
}
