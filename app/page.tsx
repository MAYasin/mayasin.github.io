"use client";

import { useState, useRef } from 'react';
import RetroHeader from './components/retro-header';
import RetroNav from './components/retro-nav';
import AboutSection from './components/about-section';
import RetroFooter from './components/retro-footer';
import SkillsSection from './components/skills-section';
import ProjectsSection from './components/project-section';
import ContactSection from './components/contact-section';
import GuestbookSection from './components/guestbook-section';
// import AboutSection from '@/components/AboutSection';
// import SkillsSection from '@/components/SkillsSection';
// import ProjectsSection from '@/components/ProjectsSection';
// import ContactSection from '@/components/ContactSection';
// import GuestbookSection from '@/components/GuestbookSection';
// import RetroFooter from '@/components/RetroFooter';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const guestbookRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
      guestbook: guestbookRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="retro-container">
        <RetroHeader />
        <RetroNav activeSection={activeSection} onNavigate={handleNavigate} />

        <main>
          <div ref={aboutRef}><AboutSection /></div>
          <hr />
          <div ref={skillsRef}><SkillsSection /></div>
          <hr />
          <div ref={projectsRef}><ProjectsSection /></div>
          <hr />
          <div ref={contactRef}><ContactSection /></div>
          <hr />
          <div ref={guestbookRef}><GuestbookSection /></div>
        </main>

        <RetroFooter />
      </div>
    </div>
  );
}