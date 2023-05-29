import { Candidate } from "@/app/api/user/type";

export interface User {
  info: Info;
  cvtext: CVText;
  skill: SkillUser;
  experience: Experience[];
}

export type Info = Pick<
  Candidate,
  | "email"
  | "photo"
  | "name"
  | "surname1"
  | "surname2"
  | "fullName"
  | "city"
  | "province"
>;

export type CVText = string;

export interface Experience {
  id: string;
  company: string;
  job: string;
  description: string;
  startingDate: string;
  onCourse: boolean;
  category: string;
  subcategories: any[];
  industry: string;
  level: string;
  staff: string;
  salaryMin: string;
  salaryMax: string;
  hideSalary: boolean;
  visible: boolean;
  expertise: ExpertiseExperience[];
}

interface ExpertiseExperience {
  skill: string;
}

export interface Skill {
  expertise: Expertise[];
  language: Language[];
}

interface Expertise {
  skill: string;
  level: string;
}

interface Language {
  id: number;
  writing: string;
  comments: string;
  reading: string;
  speaking: string;
}
