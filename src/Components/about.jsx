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
          <h1 className="text-blue-400 my-5 sm:text-4xl text-2xl">
            / About-me
          </h1>
          <p className="text-slate-400 leading-loose w-full sm:text-xl text-lg">
            I'm a software Engineer passionate about staying up to date with the
            latest trends in technology, Sharing knowledge, working with teams
            to build projects and documenting my journey online. I'm a graduate
            of the ALX software Engineering programme and currently a computer
            Science student at Adeleke University.
          </p>
          <p className="text-blue-400 text-2xl my-3">
            Technologies I've worked with
          </p>
          <div className="flex gap-7 text-slate-400 sm:text-xl text-md my-5">
            <ul className="list-disc pl-5 space-y-2">
              <li className="relative">React</li>
              <li className="relative">Python</li>
              <li className="relative">Javascript</li>
              <li className="relative">HTML5 + CSS3</li>
              <li className="relative">Typescript</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li className="relative">Django</li>
              <li className="relative">Express</li>
              <li className="relative">Flask</li>
              <li className="relative">NodeJS</li>
              <li className="relative">Springboot</li>
            </ul>
          </div>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/Me.jpg"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
