
type SkillsProps = {
    nombre: string;
    logo: string;
}

export default function Skills({nombre,logo} : SkillsProps) {
  return (
    <>
        <div data-aos="flip-left" className="flex flex-col items-center justify-center p-5 gap-5 rounded-3xl cursor-pointer">
            <span  className="text-2xl font-semibold text-[#ACC8E5]  uppercase">{nombre}</span>
            <img src={`./${logo}.png`} alt="" className="bg-transparent w-12 h-12 sm:w-20 sm:h-20 skills-effect"/>
        </div>
    
    </>
  )
}
