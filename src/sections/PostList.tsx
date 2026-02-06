import { useState, useMemo } from 'react';
import { Search, Tag, Grid3X3, List } from 'lucide-react';
import { posts, getAllTags } from '@/data/posts';
import { PostCard } from './PostCard';
import { Input } from '@/components/ui/input';

interface PostListProps {
  onPostClick: (postId: string) => void;
}

export function PostList({ onPostClick }: PostListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allTags = getAllTags();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = selectedTag === null || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const featuredPost = posts[0];
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">最新</span>
            <span className="text-primary">文章</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            探索技术世界的深度文章，涵盖前端开发、后端架构、DevOps 等多个领域。
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border focus:border-primary"
            />
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedTag === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              全部
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          共找到 {filteredPosts.length} 篇文章
        </div>

        {/* Posts */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">未找到相关文章</h3>
            <p className="text-muted-foreground">尝试使用其他关键词或标签</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {!searchQuery && !selectedTag && featuredPost && filteredPosts.includes(featuredPost) && (
              <div className="mb-8">
                <PostCard
                  post={featuredPost}
                  onClick={() => onPostClick(featuredPost.id)}
                  featured
                />
              </div>
            )}

            {/* Regular Posts */}
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {regularPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onClick={() => onPostClick(post.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
