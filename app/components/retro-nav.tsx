"use client"; // Required for interactivity in Next.js App Router

interface RetroNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const RetroNav = ({ activeSection, onNavigate }: RetroNavProps) => {
  const navItems = [
    { id: 'about', label: '[About Me]' },
    { id: 'skills', label: '[Skills]' },
    { id: 'projects', label: '[Projects]' },
    { id: 'contact', label: '[Contact]' },
    { id: 'guestbook', label: '[Guestbook]' },
  ];

  return (
    <nav className="text-center my-6 py-3 border-y border-dashed border-foreground">
      <div className="flex flex-wrap justify-center gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button" // Good practice for buttons that don't submit forms
            onClick={() => onNavigate(item.id)}
            className={`hover:bg-foreground hover:text-background px-2 py-1 transition-none ${
              activeSection === item.id ? 'bg-foreground text-background' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default RetroNav;