import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import data from "../data/projects.json";
import ProjectCard from "./projectCard";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="grid sm:mx-20 sm:mt-20 sm:mb-20 relative"
      id="projects"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h1 className="text-blue-400 my-5 sm:text-4xl text-2xl">/ projects</h1>
        <div className="grid gap-3 sm:grid-cols-3">
          {data.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
