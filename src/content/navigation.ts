export const homeSections = [
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "publications", label: "Publications", href: "/#publications" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "contact", label: "Contact", href: "/#contact" },
] as const;

export const homeSectionIds = homeSections.map((section) => section.id);
