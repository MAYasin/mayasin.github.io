export default function ContactSection() {
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
            <td className="break-all sm:break-normal">
              <a href="mailto:m.amanyasin@gmail.com">m.amanyasin@gmail.com</a>
            </td>
          </tr>
          <tr>
            <td className="font-bold">GitHub:</td>
            <td className="break-all sm:break-normal">
              <a href="https://github.com/MAYasin" target="_blank" rel="noopener noreferrer">
                github.com/MAYasin
              </a>
            </td>
          </tr>
          <tr>
            <td className="font-bold">LinkedIn:</td>
            <td className="break-all sm:break-normal">
              <a href="https://linkedin.com/in/mamanyasin" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/mamanyasin
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
