const RetroHeader = () => {
  return (
    <header className="text-center border-b-2 border-foreground pb-4 mb-6">
      {/* We use a template literal for ASCII art to preserve formatting */}
      <pre className="text-xs sm:text-sm leading-tight mb-4">
{`
     _____ _____  _____ _____ _____ 
    / ____|  __ \\|  __ \\_   _/ ____|
   | |  __| |__) | |__) || || |     
   | | |_ |  _  /|  ___/ | || |     
   | |__| | | \\ \\| |   _| || |____ 
    \\_____|_|  \\_\\_|   |_____\\_____|
                                    
`}
      </pre>
      <h1 className="text-2xl font-bold">Welcome to My Homepage!</h1>
      <p className="text-muted-foreground mt-2">
        [ Full Stack Developer | Code Enthusiast | Problem Solver ]
      </p>
      <div className="mt-4 overflow-hidden">
        <span className="marquee inline-block text-terminal-green font-bold">
          ★★★ Thanks for visiting my corner of the web! ★★★
        </span>
      </div>
    </header>
  );
};

export default RetroHeader;