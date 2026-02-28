interface ExperienceType {
  companyName: string;
  positionName: string;
  from: string;
  to?: string;
  location: string;
  workType: string;
  desc?: string;
  skills?: string[];
}

interface ProjectType {
  projectName: string;
  projectLink: string;
}

interface LayoutProps {
  title: string;
  description: string;
  image?: string;
}

export type { ExperienceType, ProjectType, LayoutProps };
