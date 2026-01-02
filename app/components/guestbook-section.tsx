import { useState } from 'react';

const GuestbookSection = () => {
  const [entries] = useState([
    { name: 'WebMaster2000', date: '01/15/2025', message: 'Cool site! Keep up the good work!' },
    { name: 'CodeNinja', date: '01/10/2025', message: 'Love the retro vibes. Reminds me of the 90s!' },
    { name: 'Anonymous', date: '01/05/2025', message: 'Nice portfolio. Very nostalgic.' },
    { name: 'PixelPusher', date: '12/28/2024', message: 'Finally, a website that loads fast!' },
    { name: 'TechEnthusiast', date: '12/20/2024', message: 'Great skills list. Impressive work!' },
  ]);

  return (
    <section className="retro-section">
      <h2 className="retro-heading border-b border-foreground pb-2 mb-4">
        &gt;&gt; Guestbook
      </h2>
      
      <p className="mb-4 text-muted-foreground">
        Sign my guestbook! Leave a message for other visitors to see.
      </p>

      <div className="border-2 border-foreground p-4 mb-6 bg-secondary">
        <form className="space-y-3">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <label className="block mb-1 text-sm">Name:</label>
              <input 
                type="text" 
                className="w-full border border-foreground bg-background p-1 text-sm focus:outline-none"
                placeholder="Your name"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm">Message:</label>
            <textarea 
              className="w-full border border-foreground bg-background p-1 text-sm focus:outline-none h-16 resize-none"
              placeholder="Leave a message..."
            />
          </div>
          <button 
            type="submit"
            className="border border-foreground bg-foreground text-background px-4 py-1 text-sm hover:bg-background hover:text-foreground"
          >
            Sign Guestbook
          </button>
        </form>
      </div>

      <h3 className="font-bold mb-3">Recent Entries:</h3>
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {entries.map((entry, index) => (
          <div key={index} className="border border-dashed border-muted-foreground p-2 text-sm">
            <div className="flex justify-between text-muted-foreground text-xs mb-1">
              <span className="font-bold text-foreground">{entry.name}</span>
              <span>{entry.date}</span>
            </div>
            <p>{entry.message}</p>
          </div>
        ))}
      </div>

      <p className="text-center mt-4 text-xs text-muted-foreground">
        Total signatures: {entries.length} | Be visitor #{Math.floor(Math.random() * 9000) + 1000}!
      </p>
    </section>
  );
};

export default GuestbookSection;
