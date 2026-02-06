export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  social: {
    github?: string;
    twitter?: string;
    email?: string;
  };
}
