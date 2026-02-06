import { ArrowLeft, Calendar, Clock, User, Share2, Copy, Check } from 'lucide-react';
import type { BlogPost } from '@/types/blog';
import type { ReactElement } from 'react';
import { useState } from 'react';

interface PostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export function PostDetail({ post, onBack }: PostDetailProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Parse markdown-like content
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: ReactElement[] = [];
    let inCodeBlock = false;
    let codeContent = '';

    lines.forEach((line, index) => {
      // Code block handling
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre
              key={`code-${index}`}
              className="bg-muted rounded-lg p-4 overflow-x-auto my-6 border border-border"
            >
              <code className="text-sm font-mono text-foreground">{codeContent}</code>
            </pre>
          );
          codeContent = '';
        }
        inCodeBlock = !inCodeBlock;
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      // Headings
      if (line.startsWith('## ')) {
        elements.push(
          <h2
            key={index}
            className="text-2xl font-bold mt-10 mb-4 text-foreground"
          >
            {line.slice(3)}
          </h2>
        );
        return;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={index}
            className="text-xl font-semibold mt-8 mb-3 text-foreground"
          >
            {line.slice(4)}
          </h3>
        );
        return;
      }

      // Paragraphs
      if (line.trim()) {
        elements.push(
          <p
            key={index}
            className="text-muted-foreground leading-relaxed mb-4"
          >
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <article className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>返回文章列表</span>
        </button>

        {/* Header */}
        <header className="mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}阅读</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 hover:text-primary transition-colors ml-auto"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-primary">已复制</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>分享</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-bold text-primary/30">
              {post.title.charAt(0)}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="border-t border-border pt-8">
            {renderContent(post.content)}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">标签:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-muted text-foreground text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>已复制链接</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>复制链接</span>
                </>
              )}
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
}
