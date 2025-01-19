"use client";

import { ArrowLeft, ExternalLink, Github, Globe } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useRouter } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetails({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);

  // Find the project with the matching id
  const project = projects.find((proj) => proj.id === id);

  const handleBack = () => {
    router.back();
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full h-full md:max-w-[400px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] bg-white flex flex-col items-center justify-start gap-y-8 px-8">
      {/* Header */}
      <div className="w-full flex items-center gap-4 pt-6">
        <Link href="#" className="p-2 hover:bg-gray-100 rounded-full" onClick={handleBack}>
          <ArrowLeft className="h-6 w-6"/>
        </Link>
        <h1 className="text-2xl font-bold">Project Details</h1>
      </div>

      {/* Project Preview */}
      <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden border-4 border-black">
        <Image
          src={project.imagePath}
          alt={project.projectName}
          fill
          className="w-full h-auto"
        />
      </div>

      {/* Project Info */}
      <div className="w-full">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-2xl font-bold">{project.projectName}</h2>
            <p className="text-gray-500">{project.subtitle}</p>
          </div>
          <span className="text-gray-900">{project.date}</span>
        </div>

        {/* Separator */}
        <div className="w-full border-t border-black border-2 my-4"></div>

        {/* Profile */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-yellow-400 border-black border-2 rounded-xl flex items-center justify-center text-white text-3xl font-bold">
            Q
          </div>
          <div>
            <h3 className="font-semibold">Qiewi</h3>
            <p className="text-sm text-gray-500">Github Profile</p>
          </div>
        </div>

        <p className="text-gray-600 mb-8">{project.description}</p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <Link
            href="#"
            className="w-full bg-yellow-400 border-black border-2 border-r-4 border-b-4 text-white rounded-xl py-4 px-6 flex items-center justify-between hover:bg-yellow-500 transition-colors"
          >
            <span className="font-semibold">Check Website</span>
            <Globe className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="w-full bg-[#406CAE] border-black border-2 border-r-4 border-b-4 text-white rounded-xl py-4 px-6 flex items-center justify-between hover:bg-[#2f5083] transition-colors"
          >
            <span className="font-semibold">Visit Repository</span>
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-8" />
    </div>
  );
}
