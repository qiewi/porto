'use client'

import { useState } from 'react';
import ProfilePhoto from '@/Images/profile.jpg';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/hero/StatsCard';
import ProjectCard from '@/components/hero/ProjectCard';

export default function Home() {
  const [explored, setExplored] = useState(false);

  return (
    <main className="w-full h-full md:max-w-[400px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] bg-white flex flex-col items-center justify-start gap-y-8">
      {!explored ? (
        // "Explore Me" Landing Page
        <div className="min-h-screen flex flex-col items-center justify-between px-4 py-24">
          {/* Floating Squares */}
          <div className="absolute top-0 right-8 w-8 h-8 border-2 border-blue-400 rounded-lg rotate-12"></div>
          <div className="absolute top-24 left-4 w-6 h-6 border-2 border-blue-400 rounded-lg -rotate-12"></div>
          <div className="absolute bottom-12 right-12 w-6 h-6 border-2 border-blue-400 rounded-lg rotate-45"></div>

          {/* Character Image */}
          <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[280px] mx-auto mb-8">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl -rotate-6"></div>
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl rotate-3 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Portfolio Character"
                width={200}
                height={200}
                className="transform -rotate-3"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className='text-left'>
            <div className="space-y-2 mb-8 flex flex-col items-start text-left">
              <h1 className="text-[28px] sm:text-[32px] font-bold leading-tight">Get to Know</h1>
              <p className="text-[36px] sm:text-[40px] font-bold leading-tight">Me More, by</p>
              <p className="text-[36px] sm:text-[40px] font-bold leading-tight">Exploring</p>
            </div>
          </div>
          

          {/* CTA Button */}
          <Button
            onClick={() => setExplored(true)}
            className="w-full max-w-sm py-4 sm:py-6 text-lg sm:text-xl font-bold bg-yellow-400 hover:bg-yellow-500 text-black rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Explore Me!
          </Button>
        </div>
      ) : (
        // Main Portfolio Content
        <div className='w-full'>
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
                    className='rounded-2xl'
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
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
                <MessageCircle/>
              </Button>

              {/* Navigation Buttons */}
              <div className="max-w-sm w-full mb-6 flex flex-row items-start justify-start gap-2">
                <Button variant="default" className="bg-[#406CAE] border-r-4">
                  Project
                </Button>
                <Button className="bg-white text-black border-r-4">Experience</Button>
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-8">
                {projects.map(({ id, imagePath, projectName, subtitle, date }) => (
                  <ProjectCard
                    key={id}
                    id={id}
                    imagePath={imagePath}
                    projectName={projectName}
                    subtitle={subtitle}
                    date={date}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
