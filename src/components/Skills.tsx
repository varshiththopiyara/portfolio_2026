import htmlIcon from "../assets/SkillsIcons/HTML5.svg";
import cssIcon from "../assets/SkillsIcons/css.png";
import jsIcon from "../assets/SkillsIcons/js.jpeg";
import reactIcon from "../assets/SkillsIcons/React.svg";
import tailwindCss from "../assets/SkillsIcons/tailwind-css-icon.svg";
import cLang from "../assets/SkillsIcons/c.png";
import bootStrap from "../assets/SkillsIcons/bootstrap-5-logo-icon.svg";
import postMan from "../assets/SkillsIcons/Postman.svg";
import gitIcon from "../assets/SkillsIcons/git-icon.svg";
import gitHubIcon from "../assets/SkillsIcons/GithubLogo.png";

import MusicIcon from "../assets/musicIcons/sr-musicalnote-double-4x.svg?react";
import drumIcon from "../assets/musicIcons/sr-drum-4x.svg?react";
import earPhone from "../assets/musicIcons/sr-earphone-4x.svg?react";
import guitar from "../assets/musicIcons/sr-guitar-ukulele-4x.svg?react";
import headPhone from "../assets/musicIcons/sr-headphone-4x.svg?react";
import musicalNote from "../assets/musicIcons/sr-musicalnote-double-4x.svg?react";
import musicalNoteTwo from "../assets/musicIcons/sr-volume-down-v2-4x.svg?react";
import musicalNoteThree from "../assets/musicIcons/sr-musicalnotes-twoeight-down-4x.svg?react";
import radio from "../assets/musicIcons/sr-radio-4x.svg?react";

type Skill = {
  name: string;
  icon: string;
  note: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function Skills() {
  const skills: Skill[] = [
    {
      name: "HTML",
      icon: htmlIcon,
      note: MusicIcon,
    },
    {
      name: "CSS",
      icon: cssIcon,
      note: drumIcon,
    },
    {
      name: "JavaScript",
      icon: jsIcon,
      note: earPhone,
    },
    {
      name: "React",
      icon: reactIcon,
      note: guitar,
    },
    {
      name: "Tailwind",
      icon: tailwindCss,
      note: headPhone,
    },
    {
      name: "BootStrap",
      icon: bootStrap,
      note: musicalNote,
    },
    {
      name: "C",
      icon: cLang,
      note: musicalNoteTwo,
    },
    {
      name: "PostMan",
      icon: postMan,
      note: musicalNoteThree,
    },
    {
      name: "Git",
      icon: gitIcon,
      note: radio,
    },
    {
      name: "GitHub",
      icon: gitHubIcon,
      note: MusicIcon,
    },
  ];
  const backgroundNotes = [
    { note: "♪", position: "top-20 left-20", size: "text-7xl" },
    { note: "♫", position: "top-30 right-32", size: "text-5xl" },
    { note: "♩", position: "bottom-32 left-40", size: "text-8xl" },
    { note: "♬", position: "bottom-20 right-20", size: "text-6xl" },
    { note: "♪", position: "top-1/2 left-10", size: "text-4xl" },
  ];
  return (
    <section className="relative  min-h-screen py-20 px-10 overflow-hidden">
      {/* Background floating notes */}
      {backgroundNotes.map((item, index) => (
        <span
          key={index}
          className={`absolute ${item.position} ${item.size}
           animate-pulse select-none`}
        >
          {item.note}
        </span>
      ))}
      <div className="relative z-10 flex items-center justify-center gap-6 mb-20">
        <h2 className="font-monsieur text-6xl">My Skills</h2>

        {/* Mini Music Player */}
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full bg-linear-to-br from-gray-700 via-gray-400 to-black animate-spin flex items-center justify-center">
            <img
              src="https://png.pngtree.com/png-vector/20250825/ourlarge/pngtree-realistic-a-cartoon-cat-with-headphones-png-image_17177822.webp"
              alt="cat"
              className="w-8 h-8 rounded-full object-cover border border-black"
            />

            {/* <div className="absolute w-2 h-2 bg-black rounded-full" /> */}
          </div>

          <p className="text-sm mt-2 text-gray-300">No Signal</p>
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap  justify-center gap-16">
        {skills.map((skill, index) => {
          const NoteIcon = skill.note;

          return (
            <div
              key={index}
              className={`relative cursor-pointer w-48 h-56 bg-[#1e293b] rounded-xl p-6 text-white shadow-xl transition-all flex flex-col justify-center items-center duration-500 hover:-translate-y-3
      ${index % 3 === 0 ? "mt-0" : ""}
      ${index % 3 === 1 ? "mt-16" : ""}
      ${index % 3 === 2 ? "mt-8" : ""}`}
            >
              <NoteIcon className="absolute -top-8 -right-5 w-14 h-14 text-purple-500" />

              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />

              <h3 className="text-center mt-5 font-semibold text-xl">
                {skill.name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
