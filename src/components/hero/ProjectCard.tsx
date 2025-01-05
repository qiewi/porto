'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  id: string;
  imagePath: string;
  projectName: string;
  subtitle: string;
  date: string;
}

export default function ProjectCard({ id, imagePath, projectName, subtitle, date }: ProjectCardProps) {
  const router = useRouter(); // This is now imported from 'next/navigation'

  const handleNavigate = () => {
    router.push(`/projects/${id}`); // Navigate to the dynamic project page
  };

  return (
    <div
      className="border-2 border-b-4 border-r-4 border-black rounded-xl p-3 cursor-pointer"
      onClick={handleNavigate}
    >
      <div className="aspect-video relative mb-2 border-2 rounded-xl border-black">
        <Image 
          src={imagePath} 
          alt={projectName} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-xl"
        />
      </div>
      <div className="flex justify-between flex-row items-center mt-4">
        <div className="flex flex-col text-[10px] items-start">
          <h3 className="font-semibold mb-1">{projectName}</h3>
          <h4 className="text-[10px] text-gray-500">{subtitle}</h4>
        </div>
        <div className="flex flex-col text-[10px] items-end">
          <h3 className="font-semibold mb-1">{date}</h3>
          <h4 className="text-[10px] text-gray-500">Created</h4>
        </div>
      </div>
    </div>
  );
}
