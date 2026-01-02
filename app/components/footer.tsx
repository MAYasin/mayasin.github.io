export default function Footer() {
  return (
    <footer className="border-t-2 border-foreground pt-6 mt-8 text-center text-sm space-y-4">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="border border-foreground px-3 py-1 bg-secondary">
          <span className="text-xs">STATUS:</span>
          <span className="font-bold ml-2 text-terminal-green">
            ONLINE
          </span>
        </div>
        <div className="border border-foreground px-3 py-1 bg-secondary">
          <span className="text-xs">VERSION:</span>
          <span className="font-bold ml-2">
            2026.1.0
          </span>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground">
          Built for performance and clarity.
        </p>
        <p className="text-muted-foreground">
          All rights reserved / No cookies utilized.
        </p>
      </div>

      <div className="text-xs">
        <p>
          © {new Date().getFullYear()} | MUHAMMAD AMAN YASIN
        </p>
        <p className="mt-1 text-[10px] opacity-50">
          12.4634° N, 53.8237° E
        </p>
      </div>
    </footer>
  );
};