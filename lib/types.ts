export enum Boards {
  lhoft = "lhoft",
  default = "default",
}

export interface Page {
  slug: Boards;
}

export enum CompanySizes {
  // TODO: to fill
}

export interface Company {
  name: string;
  about: string;
  city: any; // TODO: fill
  id: number;
  logo: string;
  website: string;
  slug: string;
  size: string; // TODO: fill
}

export enum CareerLevels {} // TODO: fill

export interface Job {
  relocate: boolean;
  salaryMin: number;
  salaryMax: number;
  company: Company;
  description: string;
  id: number;
  title: string;
  locations: any[]; // TODO: fill
  carrerLevel: number; // TODO: fill
  createdAt: string;
  changedAt: string;
  status: string // TODO: fill
  department: number;
  remote: boolean;
  jobTypes: number[]; // TODO: fill
  hiringRewardEuros: number;
  skills: any[]; // TODO: fill
  jobRoles: any[]; // TODO: fill
  languages: any[]; // TODO: fill
  author?: any; // TODO: fill
  minMatchPrice: number;
  maxMatchPrice: number;
  recruiterBooster: boolean;
}

export type ComponentCollection = { [key: string]: React.FC };
