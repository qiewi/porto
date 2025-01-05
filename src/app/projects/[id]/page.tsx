import { notFound } from 'next/navigation'; // For handling 404
import { projects } from '@/data/projects'; // Import your project data

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectDetails({ params }: Props) {
  const { id } = params;

  // Find the project with the matching id
  const project = projects.find((proj) => proj.id === id);

  // If no project is found, show a 404
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 bg-white">
      {/* Project Title */}
      <h1 className="text-3xl font-bold mb-4">{project.projectName}</h1>
      
      {/* Project Image */}
      <div className="aspect-video relative border rounded-lg border-black mb-6">
        <img
          src={project.imagePath}
          alt={project.projectName}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      {/* Project Details */}
      <p className="text-lg mb-4">{project.description}</p>
      <ul className="list-disc ml-5 mb-4">
        {project.techStack.map((tech, index) => (
          <li key={index} className="text-sm">{tech}</li>
        ))}
      </ul>

      {/* Links */}
      <div className="space-y-2">
        {project.websiteLink && (
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Visit Website
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline block"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
