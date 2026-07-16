import { useEffect, useRef, useState } from "react";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
}

interface ProjectsScrollSectionProps {
  projects: Project[];
  heading?: string;
  subheading?: string;
  id?: string;
}

export default function ProjectsScrollSection({
  projects,
  heading = "My Works",
  subheading = "A collection of projects I've designed and built.",
}: ProjectsScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const total = rect.height - viewportH;
      const scrolled = -rect.top;
      const pct =
        total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
      setProgress(pct);

      let closestIndex = 0;
      let closestDistance = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const distance = Math.abs(center - viewportH / 2);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative w-full section-divider">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16">
          {/* LEFT: sticky heading + progress bar */}
          <div className="relative md:sticky md:top-0 md:h-screen flex md:flex-col md:justify-center">
            <div className="flex gap-6 md:gap-8">
              <div className="relative w-0.5 shrink-0 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full rounded-full transition-[height] duration-150 ease-out"
                  style={{
                    height: `${progress}%`,
                    backgroundColor: "var(--saffron, #f4a53d)",
                  }}
                />
                <div
                  className="absolute -left-1.25 w-3 h-3 rounded-full  transition-[top] duration-200 ease-out"
                  style={{
                    top: `${(activeIndex / Math.max(projects.length - 1, 1)) * 100}%`,
                  }}
                />
              </div>

              <div className="py-1">
                <p className="text-sm uppercase tracking-widest text-slate-400 mb-3">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold  leading-tight">
                  {heading}
                </h2>
                <p className="mt-3 text-neutral-500 max-w-55">{subheading}</p>

                <ul className="mt-8 space-y-2 hidden md:block">
                  {projects.map((p, i) => (
                    <li key={p.id}>
                      <button
                        onClick={() =>
                          itemRefs.current[i]?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          })
                        }
                        className={`text-sm transition-colors ${
                          i === activeIndex
                            ? " font-medium cursor-pointer"
                            : "text-neutral-700 hover:text-neutral-600 cursor-pointer"
                        }`}
                      >
                        {p.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: scrollable project content */}
          <div className="flex flex-col">
            {projects.map((project, i) => (
              <div
                key={project.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="py-16 md:py-24 border-b border-neutral-100 last:border-b-0"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      {project.category}
                    </span>
                    <span className="text-sm text-neutral-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold ">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-saffron transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="text-neutral-500 max-w-xl">
                    {project.description}
                  </p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-slate-300 text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 rounded-xl overflow-hidden bg-neutral-100 aspect-video">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
