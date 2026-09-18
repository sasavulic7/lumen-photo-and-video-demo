import { useState, useCallback } from 'react';
import { useRoute } from './lib/router.jsx';
import Preloader from './components/Preloader.jsx';
import Cursor from './components/Cursor.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import StoryOverlay from './components/StoryOverlay.jsx';
import Home from './pages/Home.jsx';
import Stories from './pages/Stories.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const { route } = useRoute();
  const [story, setStory] = useState(null);

  const openStory = useCallback((project) => setStory(project), []);
  const closeStory = useCallback(() => setStory(null), []);

  return (
    <>
      <Preloader />
      <Cursor />
      <a className="skip" href="#top">
        Skip to content
      </a>

      <Navbar route={route} />

      {/* key forces a fresh mount so each page plays its own entrance */}
      <div className="page-shell" key={route}>
        {route === 'home' && <Home onOpenStory={openStory} />}
        {route === 'stories' && <Stories onOpenStory={openStory} />}
        {route === 'services' && <Services />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
      </div>

      <Footer />

      <StoryOverlay project={story} onClose={closeStory} onOpen={openStory} />
    </>
  );
}