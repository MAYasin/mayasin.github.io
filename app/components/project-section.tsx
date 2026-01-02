const ProjectsSection = () => {
  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-featured online store with cart, payments, and admin dashboard.',
      tech: 'React, Node.js, PostgreSQL, Stripe',
      status: 'COMPLETE',
      year: '2024',
    },
    {
      name: 'Task Management App',
      description: 'Kanban-style project management tool with real-time collaboration.',
      tech: 'Vue.js, Express, MongoDB, Socket.io',
      status: 'COMPLETE',
      year: '2024',
    },
    {
      name: 'Weather Dashboard',
      description: 'Real-time weather data visualization with historical charts.',
      tech: 'React, Python/Flask, Redis, Chart.js',
      status: 'COMPLETE',
      year: '2023',
    },
    {
      name: 'Personal Blog Engine',
      description: 'Markdown-based blogging platform with SEO optimization.',
      tech: 'Next.js, MDX, Tailwind CSS',
      status: 'IN PROGRESS',
      year: '2025',
    },
  ];

  return (
    <section className="retro-section">
      <h2 className="retro-heading border-b border-foreground pb-2 mb-4">
        &gt;&gt; My Projects
      </h2>
      
      <p className="mb-4 text-muted-foreground">
        Here are some things I've built. Click the links to learn more!
      </p>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-dashed border-foreground p-3">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h3 className="font-bold">
                <a href="#" className="hover:bg-foreground hover:text-background">
                  {project.name}
                </a>
              </h3>
              <span className={`text-xs px-2 py-1 border border-foreground ${
                project.status === 'COMPLETE' 
                  ? 'bg-terminal-green text-background' 
                  : 'bg-highlight text-foreground blink'
              }`}>
                {project.status}
              </span>
            </div>
            <p className="mt-2 text-sm">{project.description}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Tech: {project.tech}
            </p>
            <p className="text-xs text-muted-foreground">
              Year: {project.year}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-muted-foreground">
        <span className="under-construction">🚧</span>
        {' '}More projects coming soon!{' '}
        <span className="under-construction">🚧</span>
      </p>
    </section>
  );
};

export default ProjectsSection;
