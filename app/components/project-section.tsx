export default function ProjectsSection() {
  const projects = [
    {
      name: 'BattleBots',
      url: 'https://github.com/MAYasin/BattleBots',
      description: 'An experimental Unity arena where robotic combat meets the power of Evolutionary Algorithms. Instead of being pre-programmed to fight, these bots learn how to survive, move, and destroy their opponents through generations of trial and error.',
      tech: 'C#, Unity',
      status: 'COMPLETE',
    },
    {
      name: 'Poker-Engine',
      url: 'https://github.com/MAYasin/Poker-Engine',
      description: 'A robust, extensible Java-based poker engine designed with Clean Architecture and the Strategy Pattern. This project serves as a demonstration of modern Java 22 features, comprehensive unit testing, and decoupled object-oriented design.',
      tech: 'JAVA, Maven',
      status: 'COMPLETE',
    },
    {
      name: 'EvolutionarySteps',
      url: 'https://evolutionary-steps.vercel.app/',
      description: 'An AI-powered simulation where stickman agents learn to navigate 2D environments using Neural Networks and Genetic Algorithms within a physics-based sandbox.',
      tech: 'JavaScript, P5.js',
      status: 'COMPLETE',
    },
    {
      name: 'ARP-Sniffer',
      url: 'https://github.com/MAYasin/ARP-Sniffer',
      description: 'A Python-based Man-in-the-Middle (MITM) utility designed to perform ARP spoofing and network packet capture. This tool is built for network security researchers and students to understand how ARP protocol vulnerabilities can be exploited.',
      tech: 'Python, Scapy',
      status: 'COMPLETE',
    },
    {
      name: 'ShipWars',
      url: 'https://github.com/MAYasin/ShipWars',
      description: 'An AI-driven simulation where a Reinforcement Learning agent (Agent Q) competes against a rule-based opponent (Reference Agent) in a shrinking cosmic arena. The goal is to collect food, avoid meteors, and stay within the safe zone while managing score-based combat.',
      tech: 'Python',
      status: 'COMPLETE',
    },
    {
      name: 'DrawLive',
      url: 'https://draw-live.vercel.app/',
      description: 'A high-performance, real-time collaborative drawing application. Built with a modern full-stack TypeScript architecture, it allows multiple users to ideate and create on a shared digital canvas simultaneously.',
      tech: 'Next.js, Express, Socket.io, HTML5 Canvas',
      status: 'COMPLETE',
    },
    {
      name: 'DijkstraMesh',
      url: 'https://github.com/MAYasin/DijkstraMesh',
      description: 'A distributed graph-traversal engine built on the Akka Typed actor framework. It achieves high-concurrency pathfinding by mapping every vertex in a graph to a dedicated autonomous agent.',
      tech: 'Java, Akka',
      status: 'COMPLETE',
    },
    {
      name: 'Live-Masjid',
      url: 'https://github.com/MAYasin/Live-Masjid',
      description: 'A resilient, automated audio stream player specifically designed to connect to Live Masjid broadcasts. It runs as a background service on Linux (such as a Raspberry Pi or dedicated server), ensuring that the masjid\'s live audio is always playing. It monitors a simple text file for the stream key, connects to the Live Masjid relay, and automatically recovers playback if the internet drops.',
      tech: 'Python, VLC',
      status: 'COMPLETE',
    },
    {
      name: 'BetterLearn',
      url: 'https://better-learn-azure.vercel.app/',
      description: 'A digital learning platform developed by Team Nybble. It is specifically designed to simulate an authentic on-site learning experience remotely, addressing the critical education infrastructure shortages and pandemic-related challenges in South Africa.',
      tech: 'Angular, Node.js, Supabase, Flutter',
      status: 'COMPLETE',
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
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <span className={`text-xs px-2 py-1 border border-foreground ${project.status === 'COMPLETE'
                ? 'bg-terminal-green text-background'
                : 'bg-highlight text-foreground'
                }`}>
                {project.status}
              </span>
            </div>
            <p className="mt-2 text-sm">{project.description}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Tech: {project.tech}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-muted-foreground">
        <span>🚧</span>
        {' '}More projects coming soon!{' '}
        <span>🚧</span>
      </p>
    </section>
  );
};
