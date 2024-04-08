import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({ title, description, stack, link }) {
  return (
    <div className="bg-blue-950 hover:bg-blue-800 border-black border-2 hover:scale-105 rounded-lg p-3 h-80 relative transition ease-in-out duration-100">
      <div className="flex justify-between text-slate-50">
        <CodeIcon className='cursor-pointer' />
        <a href={link} target='_blank' className='cursor-pointer'><GitHubIcon /></a>
      </div>
      <h1 className='text-slate-50 font-bold text-xl my-3'>{ title }</h1>
      <p className='text-slate-400 text-md mb-10'>{ description }</p>
      <p className='text-slate-400 text-md absolute bottom-8'>{ stack }</p>
    </div>
  )
}
