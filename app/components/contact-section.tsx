const ContactSection = () => {
  return (
    <section className="retro-section">
      <h2 className="retro-heading border-b border-foreground pb-2 mb-4">
        &gt;&gt; Contact Me
      </h2>
      
      <p className="mb-4">
        Want to work together? Have a question? Drop me a line!
      </p>

      <table className="retro-table">
        <tbody>
          <tr>
            <td className="font-bold w-1/3">Email:</td>
            <td>
              <a href="mailto:m.amanyasin@gmail.com">m.amanyasin@gmail.com</a>
            </td>
          </tr>
          <tr>
            <td className="font-bold">GitHub:</td>
            <td>
              <a href="https://github.com/MAYasin" target="_blank" rel="noopener noreferrer">
                github.com/MAYasin
              </a>
            </td>
          </tr>
          <tr>
            <td className="font-bold">LinkedIn:</td>
            <td>
              <a href="https://linkedin.com/in/mamanyasin" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/mamanyasin
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="my-6" />

      <div className="text-center">
        <p className="mb-4">Or use this handy form:</p>
        <form className="text-left max-w-md mx-auto space-y-4">
          <div>
            <label className="block mb-1">Your Name:</label>
            <input 
              type="text" 
              className="w-full border-2 border-foreground bg-background p-2 focus:outline-none focus:bg-muted"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block mb-1">Your Email:</label>
            <input 
              type="email" 
              className="w-full border-2 border-foreground bg-background p-2 focus:outline-none focus:bg-muted"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block mb-1">Message:</label>
            <textarea 
              className="w-full border-2 border-foreground bg-background p-2 focus:outline-none focus:bg-muted h-32 resize-none"
              placeholder="Hello! I'd like to..."
            />
          </div>
          <button 
            type="submit"
            className="w-full border-2 border-foreground bg-foreground text-background p-2 hover:bg-background hover:text-foreground transition-none font-bold"
          >
            [ SEND MESSAGE ]
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
