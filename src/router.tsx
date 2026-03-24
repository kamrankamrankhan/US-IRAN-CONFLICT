import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';
import ArticlePage from './pages/ArticlePage';
import BlogsListPage from './pages/BlogsListPage';
import BlogPostPage from './pages/BlogPostPage';
import LiveCoveragePage from './pages/LiveCoveragePage';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'topic/:slug', element: <TopicPage /> },
      { path: 'article', element: <ArticlePage /> },
      { path: 'blogs', element: <BlogsListPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'live-coverage', element: <LiveCoveragePage /> },
      { path: 'news', element: <NewsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
