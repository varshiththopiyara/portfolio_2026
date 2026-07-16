import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const title = new SplitType(titleRef.current!, {
        types: "chars",
      });

      const paragraph = new SplitType(textRef.current!, {
        types: "words",
      });

      gsap.set([...(title.chars ?? []), ...(paragraph.words ?? [])], {
        transformOrigin: "50% 100%",
        transformPerspective: 1000,
      });

      gsap.from(title.chars, {
        rotateX: -90,
        yPercent: 120,
        opacity: 0,
        stagger: 0.03,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(paragraph.words, {
        rotateX: -90,
        yPercent: 120,
        opacity: 0,
        stagger: 0.02,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full section-divider overflow-hidden py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-semibold text-center"
          style={{ perspective: "1000px" }}
        >
          Info About Me
        </h2>

        <p
          ref={textRef}
          className="mt-10 text-center text-lg md:text-2xl leading-relaxed text-slate-400"
          style={{ perspective: "1000px" }}
        >
          I'm a <span className="text-[#c10007]">Front-end Web Developer</span> and designer who takes great pleasure in
          conceptualizing and bringing to life visually stunning products. I'm
          always eager to broaden my horizons and acquire new skills that allow
          me to work more efficiently.
        </p>
      </div>
    </section>
  );
}
