export const handleScrollToSection = (section: string): void => {
  const formSection = document.getElementById(section);
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
};
