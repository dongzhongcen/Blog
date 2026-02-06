import { Code2, Server, Database, Globe, Terminal, GitBranch } from 'lucide-react';
import { author } from '@/data/posts';

const skills = [
  {
    category: '前端开发',
    icon: Code2,
    items: ['React', 'Vue', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: '后端开发',
    icon: Server,
    items: ['Node.js', 'Python', 'Go', 'Express', 'FastAPI'],
  },
  {
    category: '数据库',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    category: 'DevOps',
    icon: Globe,
    items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux'],
  },
  {
    category: '工具',
    icon: Terminal,
    items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest'],
  },
  {
    category: '其他',
    icon: GitBranch,
    items: ['Agile', 'Scrum', 'TDD', 'Microservices'],
  },
];

const experiences = [
  {
    period: '2022 - 至今',
    title: '高级前端工程师',
    company: '某科技公司',
    description: '负责公司核心产品的前端架构设计与开发，带领团队完成多个大型项目。',
  },
  {
    period: '2020 - 2022',
    title: '全栈开发工程师',
    company: '某互联网公司',
    description: '参与前后端开发，负责多个微服务的设计与实现。',
  },
  {
    period: '2019 - 2020',
    title: '初级开发工程师',
    company: '某创业公司',
    description: '参与产品原型开发，学习并掌握了多种前端技术栈。',
  },
];

export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">关于</span>
            <span className="text-primary">我</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            热爱技术，追求卓越，致力于创造优秀的数字产品。
          </p>
        </div>

        {/* Profile */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Avatar */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-32 h-32"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold">{author.name}</h3>
                <p className="text-muted-foreground mt-1">{author.bio}</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                我是一名拥有 5 年经验的全栈开发工程师，专注于构建高性能、可扩展的 Web 应用。
                我热爱开源技术，积极参与社区贡献，并持续学习最新的技术趋势。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                在工作之余，我喜欢通过博客分享我的技术心得和实践经验，
                希望能够帮助更多的开发者成长。我相信知识的力量，也相信分享能够让技术社区变得更加美好。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                如果你对我的文章感兴趣，或者想要交流技术问题，欢迎通过社交媒体或邮件与我联系。
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            技术<span className="text-primary">栈</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-md bg-muted text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            工作<span className="text-primary">经历</span>
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l border-border last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />

                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                  <p className="text-primary text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
