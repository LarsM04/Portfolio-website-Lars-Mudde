import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Journey } from "./components/Journey";
import { Projects } from "./components/Projects";
import { HowIWork } from "./components/HowIWork";
import { Learning } from "./components/Learning";
import { Contact } from "./components/Contact";

function SectionDivider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background:
          "linear-gradient(to right, transparent, rgba(0,212,255,0.18), transparent)",
      }}
    />
  );
}

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      style={{
        background: "#001419",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Journey />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <HowIWork />
      <SectionDivider />
      <Learning />
      <SectionDivider />
      <Contact />
    </div>
  );
}
