export enum CompanySizes {
  LE10 = "1_to_10",
  LE50 = "11_to_50",
  LE200 = "51_to_200",
  LE500 = "201_to_500",
  LE1000 = "501_to_1000",
  LE5000 = "1001_to_5000",
  LE10000 = "5001_to_10000",
  LEInf = "10000_to_inf",
}

export enum JobStatuses {
  ACT = "ACT",
  PAU = "PAU",
  REV = "REV",
  DEL = "DEL",
}

export interface CompanyCity {
  country: {
    name: string;
    id: number;
  };
  id: number;
  jobsCount: number;
  name: string;
  placeId: string;
}

export interface Company {
  name: string;
  about: string;
  city: CompanyCity;
  id: number;
  logo: string;
  website: string;
  slug: string;
  size: CompanySizes;
}

export enum CareerLevels {
  Student = 0,
  Entry = 1,
  Intermediate = 2,
  Senior = 3,
  Expert = 4,
  Executive = 5,
}

export interface JobLocation {
  country: {
    name: string;
    id: number;
  };
  name: string;
  placeId: string;
}

export enum JobTypes {
  FullTime = 1,
  PartTime = 2,
  Contractor = 3,
  Intern = 4,
  Temporary = 5,
}

export interface JobSkill {
  id: number;
  name: string;
}

export interface JobCategory {
  id: number;
  name: string;
}

export interface JobRole {
  id: number;
  level: number;
  name: string;
  category: JobCategory;
}

export enum LanguageLevels {
  Beginner = 0,
  Elementary = 1,
  Intermediate = 2,
  UpperIntermediate = 3,
  Advanced = 4,
  Mastery = 5,
  Native = 6,
}

export interface Language {
  id: number;
  name: string;
  level: LanguageLevels;
}

export interface Job {
  relocate: boolean;
  salaryMin: number;
  salaryMax: number;
  company: Company;
  description: string;
  id: number;
  title: string;
  locations: JobLocation[];
  careerLevel: CareerLevels;
  createdAt: string;
  changedAt: string;
  status: JobStatuses;
  department: number;
  remote: boolean;
  jobTypes: JobTypes[];
  hiringRewardEuros: number;
  skills: JobSkill[];
  jobRoles: JobRole[];
  languages: Language[];
  author?: number;
  minMatchPrice: number;
  maxMatchPrice: number;
  recruiterBooster: boolean;
}

export interface CompanyGroup {
  company: Company;
  title: string;
  id: number;
  slug: string;
  logo: string;
  createdAt: string;
}

export type ComponentCollection = { [key: string]: React.FC };

