export default function ExperienceSection() {
  const experiences = [
    {
      company: 'BMW',
      role: 'Senior Software Engineer',
      period: 'Nov 2024 - Present',
      tech: 'Angular, Java, Payara, UI/UX Optimization',
      description: 'Leading front-end architecture and driving high-quality Java/Payara backend delivery for automotive business operations.',
    },
    {
      company: 'Dariel Software',
      role: 'Software Engineer',
      period: 'Feb 2022 - Oct 2024',
      tech: 'Full-Stack Development, Architecture, Mentoring',
      description: 'Consulted for major industry players, solving complex problems across diverse tech stacks. Focused on clean code, solid architecture, and engineering excellence.',
    },
    {
      company: 'First National Bank (FNB)',
      role: 'Software Engineer (via Dariel)',
      period: 'Feb 2022 - Oct 2024',
      tech: 'Spring Boot, Java, Camunda BPMN, Backend Microservices, OCEP',
      description: 'Developed and maintained Fintegrate 2, a backend microservice architecture specifically designed for orchestrating B2B Payment processes. Implemented real-time monitoring tools and internal admin platforms to ensure system reliability and operational visibility.',
    },
    {
      company: 'The Wot-if? Trust',
      role: 'Full-Stack Developer (via Dariel)',
      period: 'Feb 2022 - Dec 2022',
      tech: '.NET, Angular, Legacy Migration',
      description: 'Modernized legacy software to modern .NET/Angular. Redesigned interfaces and implemented new reporting/statistics features.',
    }
  ];

  return (
    <section className="retro-section">
      <h2 className="retro-heading mb-4 border-b border-foreground pb-2">
        &gt;&gt; Work Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-dashed border-foreground p-3">
            <h3 className="font-bold text-terminal-green text-lg">
              {exp.company}
            </h3>
            <p className="font-bold italic text-sm">{exp.role}</p>

            <p className="mt-3 text-sm leading-relaxed">
              {exp.description}
            </p>

            <div className="mt-4 pt-2 border-t border-dotted border-foreground/30">
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-foreground">Tech:</span> {exp.tech}
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-foreground">Timeline:</span> {exp.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}