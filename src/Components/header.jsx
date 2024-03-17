import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';

export default function Header() {
  return (
    <div className="flex justify-between align-middle sticky top-0 z-40 bg-navy-blue">
      <ul className="hidden sm:flex align-middle gap-4 ml-10 p-3">
        <li className="hover:text-blue-400 text-white font-extrabold">
          <a href="#">Alex Osigeli</a>
        </li>
        <li className="hover:text-blue-400 text-white cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-blue-400 text-white cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-blue-400 text-white cursor-pointer">
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <ul className="flex align-middle gap-4 mr-10 p-3 text-white">
        <a href='mailto:osigelialex@gmail.com'><EmailIcon className='hover:text-blue-400 cursor-pointer'/></a>
        <a href="https://github.com/Osigelialex" target='_blank'><GitHubIcon className='hover:text-blue-400 cursor-pointer'/></a>
        <a href="https://www.linkedin.com/in/alexander-osigeli-905610238/"><LinkedInIcon className='hover:text-blue-400 cursor-pointer'/></a>
        <a href="https://twitter.com/osigeli25" target='_blank'><XIcon className='hover:text-blue-400 cursor-pointer'/></a>
      </ul>
    </div>
  )
}