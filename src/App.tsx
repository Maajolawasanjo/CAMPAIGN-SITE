import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VisionPage } from './pages/VisionPage';
import { ManifestoPage } from './pages/ManifestoPage';
import { ManifestoDetailPage } from './pages/ManifestoDetailPage';
import { TrackRecordPage } from './pages/TrackRecordPage';
import { JoinPage } from './pages/JoinPage';
import { JoinDetailPage } from './pages/JoinDetailPage';
import { SupportPage } from './pages/SupportPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { NewsPage } from './pages/NewsPage';
import { MediaPage } from './pages/MediaPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/manifesto" element={<ManifestoPage />} />
            <Route path="/manifesto/:topic" element={<ManifestoDetailPage />} />
            <Route path="/track-record" element={<TrackRecordPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/join/:role" element={<JoinDetailPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}