import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: ReactNode;
  description: string;
  children: ReactNode;
}

function Section({
  title,
  subtitle=null,
  description,
  children
}:SectionProps) {

  return (
    <section className="section-padding limit-width-lg">
      <h2 className="text-left heading-lg">{title}</h2>
      {subtitle}
      <p className="paragraph mb-8">{description}</p>
      {children}
    </section>
  );
}

export default Section;