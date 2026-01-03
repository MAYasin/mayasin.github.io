"use client";

import { useState, useRef } from 'react';
import RetroHeader from './components/header';
import Nav from './components/nav';
import AboutSection from './components/about-section';
import Footer from './components/footer';
import ExperienceSection from './components/experience-section';
import ProjectsSection from './components/project-section';
import ContactSection from './components/contact-section';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'M. Aman Yasin',
    jobTitle: 'Full Stack Developer',
    url: 'https://mayasin.github.io',
    sameAs: [
      'https://github.com/MAYasin',
      'https://linkedin.com/in/mamanyasin'
    ],
    description: 'Full Stack Developer bridging backend architecture and modern client-side delivery to build scalable web solutions.',
    knowsAbout: [
      'Full Stack Development',
      'Next.js',
      'React',
      'Backend Architecture',
      'Distributed Systems'
    ],
  };

  const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const guestbookRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
      guestbook: guestbookRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="retro-container">
        <RetroHeader />
        <Nav activeSection={activeSection} onNavigate={handleNavigate} />

        <main>
          <div ref={aboutRef}><AboutSection /></div>
          <hr />
          <div ref={experienceRef}><ExperienceSection /></div>
          <hr />
          <div ref={projectsRef}><ProjectsSection /></div>
          <hr />
          <div ref={contactRef}><ContactSection /></div>
        </main>

        <Footer />
      </div>
    </div>
  );
}