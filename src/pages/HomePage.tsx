import Hero from '../sections/Hero';
import AlbumCube from '../sections/AlbumCube';
import ParallaxGallery from '../sections/ParallaxGallery';
import Footer from '../sections/Footer';
import FeaturedArticle from '../sections/FeaturedArticle';
import BlogsSection from '../sections/BlogsSection';
import NewsSection from '../sections/NewsSection';
import BlogPoster from '../sections/BlogPoster';

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-void-black overflow-x-hidden">
      <Hero />
      <BlogPoster />
      <AlbumCube />
      <ParallaxGallery />
      <NewsSection />
      <BlogsSection />
      <FeaturedArticle />
      <Footer />
    </main>
  );
}
