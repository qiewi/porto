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
      id: "bandung-bondowoso",
      imagePath: "/Images/projects/bandung-bondowoso.png",
      projectName: "Candi Builder",
      subtitle: "CLI Program",
      date: "14/04/23",
      description: "A program that can have CRUD operations for csv files in CLI using Python.",
      githubLink: "https://github.com/qiewi/Bandung-Bondowoso-Candi-Builder",
      techStack: ["Python"],
    },
    {
      id: "project-do-nation",
      imagePath: "/Images/projects/donation.png",
      projectName: "Do-Nation",
      subtitle: "Donation Web",
      date: "17/12/24",
      description: "This is a description of project 1.",
      websiteLink: "https://example.com/project-1",
      githubLink: "https://github.com/your-repo/project-1",
      techStack: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: "project-intrive",
      imagePath: "/Images/projects/intrive.png",
      projectName: "Intrive",
      subtitle: "Virtual Lab",
      date: "20/11/24",
      description: "This is a description of project 2.",
      githubLink: "https://github.com/your-repo/project-2",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: "project-wayang-wave",
      imagePath: "/Images/projects/donation.png",
      projectName: "Do-Nation",
      subtitle: "Donation Web",
      date: "17/12/24",
      description: "This is a description of project 1.",
      websiteLink: "https://example.com/project-1",
      githubLink: "https://github.com/your-repo/project-1",
      techStack: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: "project-michael-vs-lalapan",
      imagePath: "/Images/projects/intrive.png",
      projectName: "Intrive",
      subtitle: "Virtual Lab",
      date: "20/11/24",
      description: "This is a description of project 2.",
      githubLink: "https://github.com/your-repo/project-2",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: "project-arkavidia",
      imagePath: "/Images/projects/intrive.png",
      projectName: "Intrive",
      subtitle: "Virtual Lab",
      date: "20/11/24",
      description: "This is a description of project 2.",
      githubLink: "https://github.com/your-repo/project-2",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
  ];
  