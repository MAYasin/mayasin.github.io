"use client";

interface NavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Nav = ({ activeSection, onNavigate }: NavProps) => {
  const navItems = [
    { id: 'about', label: '[About Me]' },
    { id: 'skills', label: '[Skills]' },
    { id: 'projects', label: '[Projects]' },
    { id: 'contact', label: '[Contact]' }
  ];

  return (
    <nav className="text-center my-6 py-3 border-y border-dashed border-foreground">
      <div className="flex flex-wrap justify-center gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`hover:bg-foreground hover:text-background px-2 py-1 transition-none cursor-pointer ${
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

export default Nav;