import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//----- components -----//
import Header from "./components/Header";
import Footer from "./components/Footer";
import WithCookie from "./components/WithCookie";
import ScrollToTop from "./components/ScrollToTop";
//----- Commun -----//
import Contact from "./pages/Commun/Contact";
import SiteMap from "./pages/Commun/SiteMap";
import NotFound from "./pages/Commun/NotFound";
//----- Blog -----//
import Blog from "./pages/Blog/Blog";
import About from "./pages/Blog/About";
import Entreprise from "./pages/Blog/Entreprise";
import Bilan from "./pages/Blog/Bilan";
import Articles from "./pages/Blog/Articles";
import MentionsLegales from "./pages/Blog/MentionsLegales";
import Remerciements from "./pages/Blog/Remerciements";
import Detail from "./pages/Blog/Detail";
//----- Portfolio -----//
import Profil from "./pages/Portfolio/Profil";
import Portfolio from "./pages/Portfolio/Portfolio";
import Competences from "./pages/Portfolio/Competences";
import Projets from "./pages/Portfolio/Projets";
import Experiences from "./pages/Portfolio/Experiences";
import DetailProjet from "./pages/Portfolio/Detail";
import DetailExp from "./pages/Portfolio/DetailExp";

const App = () => {
  const [view, setView] = useState("blog");

  return (
    <Router>
      <div>
        <Header view={view} setView={setView} />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/remerciements" element={<Remerciements />} />
            <Route path="*" element={<NotFound />} />

            {view === "portfolio" && (
              <>
                <Route path="/" element={<Portfolio />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/competences" element={<Competences />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/experiences/:id" element={<DetailExp />} />
                <Route path="/projets/:id" element={<DetailProjet />} />
              </>
            )}
            {view === "blog" && (
              <>
                <Route path="/" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/entreprise" element={<Entreprise />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/bilan" element={<Bilan />} />
                <Route path="/missions/:id" element={<Detail />} />
              </>
            )}
            <Route
              path="/portfolio"
              element={
                <WithCookie cookieName="siteView" cookieValue="portfolio">
                  <Portfolio />
                </WithCookie>
              }
            />
            <Route
              path="/blog"
              element={
                <WithCookie cookieName="siteView" cookieValue="blog">
                  <Blog />
                </WithCookie>
              }
            />
          </Routes>
        </main>
        <Footer view={view} setView={setView} />
      </div>
    </Router>
  );
};

export default App;
