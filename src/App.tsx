import { useState, useEffect } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { PostList } from './sections/PostList';
import { PostDetail } from './sections/PostDetail';
import { About } from './sections/About';
import { Footer } from './sections/Footer';
import { getPostById } from './data/posts';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage('home');
      setSelectedPostId(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostClick = (postId: string) => {
    setSelectedPostId(postId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPosts = () => {
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    // If a post is selected, show post detail
    if (selectedPostId) {
      const post = getPostById(selectedPostId);
      if (post) {
        return <PostDetail post={post} onBack={handleBackToPosts} />;
      }
    }

    // Otherwise show page content
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <div id="posts">
              <PostList onPostClick={handlePostClick} />
            </div>
          </>
        );
      case 'posts':
        return <PostList onPostClick={handlePostClick} />;
      case 'about':
        return <About />;
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <div id="posts">
              <PostList onPostClick={handlePostClick} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="pt-16">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
