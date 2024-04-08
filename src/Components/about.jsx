import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from '@mui/material';

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
        className="grid gap-3 sm:grid-cols-2 sm:mx-32 sm:mt-20 mb-10 place-items-center relative"
        id="about"
      >
        <div>
          <h1 className="text-blue-400 my-5 sm:text-4xl text-2xl font-extrabold">
            About-me
          </h1>
          <p className="text-slate-400 leading-loose w-full sm:text-xl text-lg">
            I'm a software Engineer passionate about staying up to date with the
            latest trends in technology, Sharing knowledge, working with teams
            to build projects and documenting my journey online. I'm a graduate
            of the ALX software Engineering programme and currently a computer
            Science student at Adeleke University.
          </p>
          <p className="text-blue-400 text-2xl my-3 font-extrabold">
            Technologies I've worked with
          </p>
          <div className="flex gap-20 text-slate-400 sm:text-xl text-md ml-5 my-5">
            <ul className="list-disc marker:text-blue-400 marker:text-xl">
              <li>React</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>HTML5 + CSS3</li>
            </ul>
            <ul className="list-disc marker:text-blue-400 marker:text-xl">
              <li>Django</li>
              <li>Express</li>
              <li>Springboot</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <p className="leading-loose text-slate-400 sm:text-xl sm:w-5/6 text-md sm:mb-5 mb-10">
            Outside programming, I enjoy video games, pencil sketching and chess.
          </p>
        </div>
        <div>
          <Card sx={{ maxWidth: 345, height: 200 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="/coding.webp"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
