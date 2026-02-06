import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

interface PostCardProps {
  post: BlogPost;
  onClick: () => void;
  featured?: boolean;
}

export function PostCard({ post, onClick, featured = false }: PostCardProps) {
  if (featured) {
    return (
      <article
        onClick={onClick}
        className="group cursor-pointer relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/30">
                {post.title.charAt(0)}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {post.tags[0]}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h2>

            <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2 text-primary font-medium">
              <span>阅读全文</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl font-bold text-primary/30">
            {post.title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </article>
  );
}
