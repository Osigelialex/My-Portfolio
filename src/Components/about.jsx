import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

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
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div
        ref={ref}
        className="grid sm:grid-cols-2 gap-3 sm:mx-20 sm:mt-20 sm:mb-10 mb-10 relative"
        id="about"
      >
        <div>
          <h1 className="text-blue-400 my-5 sm:text-4xl text-2xl">
            / about-me
          </h1>
          <p className="text-slate-400 leading-loose sm:w-5/6 w-full sm:text-lg text-md">
            I'm a software Engineer passionate about staying up to date with the
            latest trends in technology, Sharing knowledge, working with teams
            to build projects and documenting my journey online. I'm a graduate
            of the ALX software Engineering programme and currently a computer
            Science student at Adeleke University.
          </p>
          <p className="text-blue-400 text-2xl my-3">
            Technologies I've worked with
          </p>
          <div className="flex gap-7 text-slate-400 sm:text-xl text-md sm:ml-5 my-5">
            <ul className="list-disc">
              <li>React</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>HTML5 + CSS3</li>
            </ul>
            <ul className="list-disc">
              <li>Django</li>
              <li>Express</li>
              <li>Flask</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <p className="leading-loose text-slate-400 sm:text-lg sm:w-5/6 text-md sm:mb-5 mb-10">
            Outside programming, I enjoy video games, pencil sketching and I
            play a lot of chess
          </p>
        </div>
        <div>
          <img 
            className="rounded-xl"
            src="/Me.jpg" />
        </div>
      </div>
    </motion.div>
  );
}
