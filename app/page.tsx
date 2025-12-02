import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// This page uses Server-Side Rendering (SSR) by default in Next.js App Router
export default function Page() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 lg:ml-80">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
