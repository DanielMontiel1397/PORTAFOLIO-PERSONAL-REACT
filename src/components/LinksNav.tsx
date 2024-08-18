
import {Link, Events} from 'react-scroll'

type LinkProps = {
    direccion: string;
    seccion: string;
    mobile: boolean
    setMobile: React.Dispatch<React.SetStateAction<boolean>>
}


export default function LinksNav({direccion,seccion, mobile, setMobile}: LinkProps ) {
  Events.scrollEvent.register('begin',() => {
    if(window.innerWidth < 770){
      setMobile(!mobile)
    }
  });

  return (
    <Link spy={true} smooth={true} to={direccion}>
        <li className={mobile ? "my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer" : "hover:text-cyan-600 transition hover:border-b-2 border-slate-900 hover:border-cyan-900 cursor-pointer uppercase font-bold text-center"}>{seccion}</li>
    </Link>
  )
}
