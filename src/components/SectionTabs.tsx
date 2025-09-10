import React, { useEffect, useRef, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SectionTabs() {
  const [active, setActive] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length > 0) {
        // Pick the section closest to the top
        const topSection = visible.reduce((prev, curr) =>
          prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
        );
        setActive(topSection.target.id);
      }
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-30 bg-[var(--background)] border-b border-[var(--gray)] flex justify-cente py-2">
      <ul className="flex gap-6">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`px-4 py-2 rounded font-semibold transition-colors ${
                active === section.id
                  ? "bg-[var(--accent)] text-black shadow"
                  : "text-[var(--foreground)] hover:bg-[var(--gray)]"
              }`}
              onClick={() => handleTabClick(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
