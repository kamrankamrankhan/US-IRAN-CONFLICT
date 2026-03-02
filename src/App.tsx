import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import useLenis from './hooks/useLenis';
import { getPageSEO, updateSEO } from './lib/seo';
import Hero from './sections/Hero';
import AlbumCube from './sections/AlbumCube';
import ParallaxGallery from './sections/ParallaxGallery';
import Footer from './sections/Footer';
import FeaturedArticle from './sections/FeaturedArticle';
import TopicPage from './pages/TopicPage';
import ArticlePage from './pages/ArticlePage';
import BlogsListPage from './pages/BlogsListPage';
import BlogPostPage from './pages/BlogPostPage';
import LiveCoveragePage from './pages/LiveCoveragePage';

function App() {
  const location = useLocation();
  useLenis();

  // Viewport meta
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }, []);

  // SEO: update title and meta tags on route change
  useEffect(() => {
    const seo = getPageSEO(location.pathname);
    updateSEO(seo);
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="relative w-full min-h-screen bg-void-black overflow-x-hidden">
            <Hero />
            <AlbumCube />
            <ParallaxGallery />
            <FeaturedArticle />
            <Footer />
          </main>
        }
      />
      <Route path="/topic/:slug" element={<TopicPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/blogs" element={<BlogsListPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/live-coverage" element={<LiveCoveragePage />} />
    </Routes>
  );
}

export default App;
