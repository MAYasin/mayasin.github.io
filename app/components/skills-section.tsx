const SkillsSection = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js'],
    backend: ['Node.js', 'Python', 'PHP', 'Ruby', 'Go', 'Java'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
    tools: ['Git', 'Docker', 'Linux', 'AWS', 'Nginx', 'Vim'],
  };

  const renderSkillBar = (skill: string, level: number) => {
    // 10-point scale for the retro progress bar
    const filled = '█'.repeat(level);
    const empty = '░'.repeat(10 - level);
    
    return (
      <div key={skill} className="flex items-center gap-2 whitespace-nowrap">
        <span className="w-24 text-right font-mono">{skill}</span>
        <span className="text-terminal-green">[{filled}{empty}]</span>
      </div>
    );
  };

  return (
    <section className="retro-section">
      <h2 className="retro-heading mb-4 border-b border-foreground pb-2">
        &gt;&gt; Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold mb-2">:: Frontend ::</h3>
          <ul className="retro-list">
            {skills.frontend.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">:: Backend ::</h3>
          <ul className="retro-list">
            {skills.backend.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">:: Databases ::</h3>
          <ul className="retro-list">
            {skills.databases.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">:: Tools ::</h3>
          <ul className="retro-list">
            {skills.tools.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-6 border-foreground" />

      <h3 className="font-bold mb-4">:: Proficiency Levels ::</h3>
      <div className="space-y-1 text-sm overflow-x-auto">
        {renderSkillBar('JavaScript', 9)}
        {renderSkillBar('React/Next', 8)}
        {renderSkillBar('Node.js', 8)}
        {renderSkillBar('Python', 7)}
        {renderSkillBar('PostgreSQL', 7)}
        {renderSkillBar('Docker', 6)}
      </div>
    </section>
  );
};

export default SkillsSection;