import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { HomePage } from "./Homepage";
import { ProjectPage } from "./ProjectPage";
import { ProjectsGrid } from "./ProjectsGrid";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsGrid />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

