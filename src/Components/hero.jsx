import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import { TypeAnimation } from "react-type-animation";


export default function Hero() {
  return (
    <>
      <div className="h-screen grid place-items-center pb-5" id="home">
        <div>
          <h1 className="sm:text-2xl text-xl text-slate-50 mb-2">
            <TypeAnimation
              sequence={["hi, Alex here", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "3em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="sm:text-5xl text-lg text-slate-400 mb-4">
            I enjoy building cool stuff.
          </p>
          <div className="flex gap-4">
            <Button variant="outlined" href="mailto:osigelialex@gmail.com" endIcon={<EmailIcon />}>
              Say hi
            </Button>
            <Button variant="outlined" href="https://drive.google.com/file/d/1yH3TvLvCRyX_QwRlIIlVKSaO5QBZ2wqZ/view?usp=drive_link" download='MY_CV.pdf' endIcon={<DownloadIcon />}>
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
