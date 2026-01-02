"use client";

import { useState, useEffect } from 'react';

const RetroFooter = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [visitorCount] = useState(() => Math.floor(Math.random() * 50000) + 10000);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setHasMounted(true); // Signal that we are on the client
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Avoid hydration mismatch by not rendering dynamic parts until mounted
  const timeString = hasMounted ? currentTime.toLocaleTimeString() : "--:--:--";
  const visitorString = hasMounted ? visitorCount.toLocaleString() : "00,000";

  return (
    <footer className="border-t-2 border-foreground pt-6 mt-8 text-center text-sm">
      <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
        <div className="border border-foreground px-3 py-1 bg-secondary">
          <span className="text-xs">VISITORS:</span>
          <span className="font-bold ml-2 text-terminal-green">
            {visitorString}
          </span>
        </div>
        <div className="border border-foreground px-3 py-1 bg-secondary">
          <span className="text-xs">TIME:</span>
          <span className="font-bold ml-2">
            {timeString}
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-4">
        <span className="border border-foreground px-2 py-1 text-xs bg-muted">HTML 5</span>
        <span className="border border-foreground px-2 py-1 text-xs bg-muted">CSS 3</span>
        <span className="border border-foreground px-2 py-1 text-xs bg-muted">JavaScript</span>
        <span className="border border-foreground px-2 py-1 text-xs bg-muted">Next.js</span>
      </div>

      <hr className="border-foreground" />

      <p className="mt-4 text-muted-foreground">
        Best viewed in Netscape Navigator 4.0 or Internet Explorer 5.0
      </p>
      <p className="text-muted-foreground">
        Screen resolution: 800x600 recommended
      </p>

      <div className="mt-4 text-xs">
        <p>
          © {new Date().getFullYear()} | Crafted with {'<'}3 and lots of ☕
        </p>
        <p className="mt-2">
          Last updated: {new Date().toLocaleDateString()} | 
          <a href="#" className="ml-1">View Source</a> | 
          <a href="#" className="ml-1">Sitemap</a>
        </p>
      </div>

      <pre className="mt-6 text-xs text-muted-foreground leading-none">
{`
      _____
     |     |
     | EOF |
     |_____|
   
`}
      </pre>
    </footer>
  );
};

export default RetroFooter;