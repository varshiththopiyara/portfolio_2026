import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage";
import Lenis from "lenis";
import About from "./components/About";
import { ThemeProvider } from "./context/ThemeContext";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./Layout";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <ProjectsPage />
                </>
              }
            />

            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
