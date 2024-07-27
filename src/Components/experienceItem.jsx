export default function ExperienceItem({ company, title, date, description }) {
  return (
    <div>
      <h1 className='text-blue-400 text-3xl font-bold'>{ company }</h1>
      <i><h2 className='text-slate-400 text-lg font-bold'>{ title }</h2></i>
      <i><h2 className='text-slate-400 text-lg font-bold mb-3'>{ date }</h2></i>
      <p className='text-slate-400 text-xl'>{ description }</p>
    </div>
  )
}