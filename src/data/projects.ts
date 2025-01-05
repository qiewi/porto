// /data/projects.ts

export interface ProjectData {
    id: string;
    imagePath: string;
    projectName: string;
    subtitle: string;
    date: string;
    description: string;
    websiteLink?: string;
    githubLink: string;
    techStack: string[];
  }
  
  export const projects: ProjectData[] = [
    {
      id: "project-1",
      imagePath: "/images/project-1.jpg",
      projectName: "Project 1",
      subtitle: "Subtitle 1",
      date: "19/11/24",
      description: "This is a description of project 1.",
      websiteLink: "https://example.com/project-1",
      githubLink: "https://github.com/your-repo/project-1",
      techStack: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: "project-2",
      imagePath: "/images/project-2.jpg",
      projectName: "Project 2",
      subtitle: "Subtitle 2",
      date: "20/11/24",
      description: "This is a description of project 2.",
      githubLink: "https://github.com/your-repo/project-2",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
  ];
  