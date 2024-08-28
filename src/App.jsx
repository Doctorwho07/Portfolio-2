import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./pages/Blog/Blog";
import About from "./pages/Blog/About";
import Entreprise from "./pages/Blog/Entreprise";
import Articles from "./pages/Blog/Articles";
import Contact from "./pages/Commun/Contact";
import Bilan from "./pages/Blog/Bilan";
import MentionsLegales from "./pages/Blog/MentionsLegales";
import Remerciements from "./pages/Blog/Remerciements";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteMap from "./pages/Commun/SiteMap";
import NotFound from "./pages/Commun/NotFound";
import Detail from "./pages/Blog/Detail";
import Profil from "./pages/Portfolio/Profil";
import Recommandations from "./pages/Portfolio/Recommandations";
import Portfolio from "./pages/Portfolio/Portfolio";
import Competences from "./pages/Portfolio/Competences";

const App = () => {
  const [view, setView] = useState("blog");

  return (
    <Router>
      <div>
        <Header view={view} setView={setView} />
        <main>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
          {view === "blog" && (
            <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/entreprise" element={<Entreprise />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/bilan" element={<Bilan />} />
              <Route path="/remerciements" element={<Remerciements />} />
              <Route path="/sitemap" element={<SiteMap />} />
              <Route path="/projects/:id" element={<Detail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
          {view === "portfolio" && (
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/recommandations" element={<Recommandations />} />
              <Route path="/competences" element={<Competences />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
