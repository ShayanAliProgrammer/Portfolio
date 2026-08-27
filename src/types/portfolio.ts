export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  outcome: string;
  role: string;
  stack: string[];
  language: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  challenge: string;
  approach: string;
  deliverables: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};
