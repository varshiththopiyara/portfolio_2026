import { useNavigate } from "react-router-dom";
import NameReveal from "../containers/NameReveal";

function Home() {
  const navigate = useNavigate();
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-slate-500 text-lg mb-4">Hello, I'm</p>

        <NameReveal />

        <h2 className="text-3xl md:text-4xl font-bold text-slate-400 mt-4">
          Frontend Developer
        </h2>

        <p className="max-w-xl mx-auto mt-6 text-slate-500 text-lg">
          I build modern, interactive web experiences using React, Tailwind CSS,
          and clean design principles.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button
            className="px-6 py-3 rounded-full bg-blue-500 cursor-pointer text-white hover:bg-blue-600 transition"
            onClick={scrollToProjects}
          >
            My Works
          </button>

          <button
            className="px-6 py-3 rounded-full border border-slate-300 cursor-pointer transition"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
