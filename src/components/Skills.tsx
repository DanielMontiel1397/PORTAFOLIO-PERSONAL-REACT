
type SkillsProps = {
    nombre: string;
    logo: string;
}

export default function Skills({nombre,logo} : SkillsProps) {
  return (
    <div className="slide">
        <img src={`./${logo}.png`} alt={`${nombre}`} className=""/>
    </div >
  )
}


// flex flex-col items-center justify-center p-5 gap-5 rounded-3xl cursor-pointer transition-transform duration-1000 hover:rotate-360