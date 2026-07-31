import { useEffect, useState } from 'react';

export function useActiveHeading(headingIds) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!headingIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    );

    headingIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headingIds]);

  return activeId;
}