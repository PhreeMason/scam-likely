import { ReactNode } from 'react';

interface ScamSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export default function ScamSection({ title, children, id }: ScamSectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div className="text-gray-700 dark:text-gray-300 space-y-4">
        {children}
      </div>
    </section>
  );
}
