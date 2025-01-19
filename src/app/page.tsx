'use client';

import { useState, useEffect } from 'react';
import ProfilePhoto from '@/Images/profile.jpg';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experiences';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/hero/StatsCard';
import ProjectCard from '@/components/hero/ProjectCard';
import ExperienceCard from '@/components/hero/ExperienceCard';

export default function Home() {
  const [view, setView] = useState('project');
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-section]');
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const section = el.getAttribute('data-section');
        const rect = el.getBoundingClientRect();

        if (rect.top < windowHeight - 100 && section && !visibleSections.includes(section)) {
          setVisibleSections((prev) => [...prev, section]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSections]);

  return (
    <main className="w-full h-full bg-white flex flex-col items-center justify-start gap-y-8">
      <div className="w-full">
        {/* Header Background */}
        <div className="h-40 bg-[#406CAE] relative border-b-4 border-black" />

        {/* Profile Section */}
        <div className="px-8 -mt-16">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-b-4 border-r-4 border-black bg-yellow-400 relative mb-4 p-2 flex items-center justify-center">
              <div className="w-full h-full relative">
                <Image
                  src={ProfilePhoto}
                  alt="Profile Image"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold">Qie</h1>
              <div className="w-6 h-6 bg-yellow-400 rounded-lg border-black border flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-600 max-w-[240px] mb-6">
              A Wannabe Expert Generalist Loves to Code and Design
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm mb-6">
              <StatsCard title="Experiences" value="30+" />
              <StatsCard title="Projects" value="7+" />
              <StatsCard title="Tech Stacks" value="10+" />
            </div>

            {/* Contact Button */}
            <Button
              className="w-full max-w-sm bg-yellow-400 text-white mb-6 justify-between py-6 text-xl font-bold"
            >
              Contact Now
              <MessageCircle />
            </Button>

            {/* Navigation Buttons */}
            <div className="max-w-sm w-full mb-6 flex flex-row items-start justify-start gap-2">
              <Button
                variant="default"
                className={`border-r-4 ${view === 'project' ? 'bg-[#406CAE] text-white' : 'bg-white text-black'}`}
                onClick={() => setView('project')}
              >
                Project
              </Button>
              <Button
                className={`border-r-4 ${view === 'experience' ? 'bg-[#406CAE] text-white' : 'bg-white text-black'}`}
                onClick={() => setView('experience')}
              >
                Experience
              </Button>
            </div>

            {/* Dynamic Content */}
            {view === 'project' && (
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-8">
                {projects.map(({ id, imagePath, projectName, subtitle, date }) => (
                  <div
                    key={id}
                    data-section={`project-${id}`}
                    className={`transition-all duration-700 ease-in-out transform ${
                      visibleSections.includes(`project-${id}`)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <ProjectCard
                      id={id}
                      imagePath={imagePath}
                      projectName={projectName}
                      subtitle={subtitle}
                      date={date}
                    />
                  </div>
                ))}
              </div>
            )}

            {view === 'experience' && (
              <div className="grid grid-cols-1 gap-4 w-full max-w-sm mb-8">
                {experiences.map(({ id, title, organization, date }) => (
                  <div
                    key={id}
                    data-section={`experience-${id}`}
                    className={`transition-all duration-700 ease-in-out transform ${
                      visibleSections.includes(`experience-${id}`)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <ExperienceCard
                      title={title}
                      organization={organization}
                      date={date}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
