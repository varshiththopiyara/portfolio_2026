import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";

const links = ["HOME", "SKILLS", "WORKS", "CONTACT"];

function DynamicBar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [selectedItem, setSelectedItem] = useState<any>(0);
  const navigate = useNavigate();
  const routes: any = {
    HOME: "/",
    SKILLS: "/skills",
    WORKS: "/works",
    CONTACT: "/contact",
  };
  // const handleHomeClick = () => {
  //   if (location.pathname === "/") {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   } else {
  //     navigate("/");
  //   }
  // };
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20 pointer-events-none"
        }
      `}
    >
      <nav className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {links.map((item) => (
          <button
            key={item}
            onClick={() => {
              setSelectedItem(item);
              navigate(routes[item]);
              // handleHomeClick();
            }}
            className={`px-4 py-2 rounded-full cursor-pointer text-xs tracking-widest transition-all
              ${
                selectedItem === item
                  ? "bg-white/20 text-text-muted"
                  : "text-[#d6d3d1] hover:text-[#eff6ff]"
              }
            `}
          >
            {item}
          </button>
        ))}
        <ThemeToggle />
      </nav>
    </div>
  );
}

export default DynamicBar;
