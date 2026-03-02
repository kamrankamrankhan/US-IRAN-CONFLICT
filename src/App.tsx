import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import useLenis from './hooks/useLenis';
import { siteConfig } from './config';
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
  // Initialize Lenis smooth scrolling
  useLenis();

  useEffect(() => {
    // Set page title from config
    if (siteConfig.title) {
      document.title = siteConfig.title;
    }

    // Add viewport meta for better mobile experience
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }, []);

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
