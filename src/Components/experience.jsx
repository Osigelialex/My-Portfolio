import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import data from "../data/experience.json";
import ExperienceItem from "./experienceItem";

export default function Experienc() {
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
      className="grid sm:mx-32 sm:mt-12 sm:mb-20 relative"
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
      <h1 className="text-blue-400 my-5 sm:text-4xl text-2xl mt-5">/ Experience</h1>
        <div className="flex flex-col gap-3">
          {data.map((project) => (
            <ExperienceItem
              key={project.id}
              company={project.company}
              title={project.title}
              date={project.date}
              description={project.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
