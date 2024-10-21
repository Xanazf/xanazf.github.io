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

export type { ExperienceType };
