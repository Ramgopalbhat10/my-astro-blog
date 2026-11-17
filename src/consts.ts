import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "MRGB",
  EMAIL: "subramanyaramgopal@gmail.com",
  SITE: "https://mrgb.in",
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Ram Gopal M is a hands-on Tech Lead building enterprise search, retrieval-augmented generation systems, and internal AI agent platforms.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Engineering experience across enterprise search, applied AI, agent platforms, and backend systems at Carelon Global Solutions and Accenture.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/Batmansubbu",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/Ramgopalbhat10"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/ramgopal-bhat",
  }
];
