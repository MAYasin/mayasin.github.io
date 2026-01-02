// components/AboutSection.tsx

const AboutSection = () => {
  return (
    <section className="retro-section">
      <h2 className="retro-heading mb-4 border-b border-foreground pb-2">
        &gt;&gt; About Me
      </h2>
      <div className="space-y-4">
        <p>
          <span className="highlight text-black">Hello World!</span> I am a Full Stack 
          Developer passionate about building things for the web since the 
          good old days of dial-up internet.
        </p>
        <p>
          By day, I wrangle databases and craft APIs. By night, I push pixels 
          and debug mysterious errors. I believe in clean code, semantic HTML, 
          and the timeless beauty of a well-structured webpage.
        </p>
        
        <table className="retro-table mt-4">
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
                {/* We use the terminal-green token defined in your v4 CSS */}
                <span className="text-terminal-green">●</span> Available for hire
              </td>
            </tr>
            <tr>
              <td className="font-bold">Favorite Editor:</td>
              <td>Vim (fight me)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AboutSection;