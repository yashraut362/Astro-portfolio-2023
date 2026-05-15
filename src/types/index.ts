export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface IExperience {
  [x: string]: any;
  name: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  techStack?: string[];
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface IWork {
  title: string;
  desc: string;
  role: string;
  thumbnail: string;
  link: string;
}

export interface IWorks {
  works: IWork[];
}
