export default function AboutSection() {
  return (
    <section className="retro-section">
      <h2 className="retro-heading mb-4 border-b border-foreground pb-2">
        &gt;&gt; About Me
      </h2>
      <div className="space-y-4">
        <p>
          I am a Full Stack Developer passionate about building things for the 
          web since the early days of distributed systems and interactive interfaces.
        </p>
        <p>
          By day, I bridge the gap between robust backend architecture and modern 
          client-side delivery to build scalable enterprise solutions. I believe 
          in clean code, solid architecture, and the timeless value of 
          well-structured software that drives real business impact.
        </p>

        <table className="retro-table mt-4 w-full">
          <tbody>
            <tr>
              <td className="w-1/3 font-bold">Location:</td>
              <td>The Internet</td>
            </tr>
            <tr>
              <td className="font-bold">Experience:</td>
              <td>5+ years of coding adventures</td>
            </tr>
            <tr>
              <td className="font-bold">Status:</td>
              <td>
                <span className="text-terminal-green">●</span> Alive
              </td>
            </tr>
            <tr>
              <td className="font-bold">Favorite Editor:</td>
              <td>MS Paint (fight me)</td>
            </tr>
            <tr>
              <td className="font-bold">Side Effects:</td>
              <td>🐞 🐛 🦗</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};