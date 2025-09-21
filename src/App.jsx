import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Programs from "./components/programs";
import Team from "./components/team";
import Clients from "./components/clients";
import Testimoni from "./components/testimoni";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import ProgramDetail from "./pages/programDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-ui bg-wk-cream min-h-screen">
        {/* Navbar tetap ada di semua halaman */}
        <Navbar />

        <Routes>
          {/* Halaman utama */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Programs />
                <Team />
                <Clients />
                <Testimoni />
                <ContactForm />
              </>
            }
          />

          {/* Halaman detail program */}
          <Route path="/program/:slug" element={<ProgramDetail />} />
        </Routes>

        {/* Footer tetap ada di semua halaman */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
