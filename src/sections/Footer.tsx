import { Heart, Github, Twitter, Mail, Rss } from 'lucide-react';
import { author } from '@/data/posts';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: '导航',
      links: [
        { label: '首页', page: 'home' },
        { label: '文章', page: 'posts' },
        { label: '关于', page: 'about' },
      ],
    },
    {
      title: '标签',
      links: [
        { label: 'React', page: 'posts' },
        { label: 'TypeScript', page: 'posts' },
        { label: 'Node.js', page: 'posts' },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-lg">Blog</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              记录技术成长的每一步，分享前端开发、后端架构、DevOps 等领域的实践经验。
            </p>
            <div className="flex items-center gap-3">
              <a
                href={author.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={author.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${author.social.email}`}
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Rss className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by{' '}
            {author.name}
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
