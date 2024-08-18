import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import MenuNav from "./MenuNav";

export default function Navegacion() {

    const [menuMobile, setMenuMobile] = useState(false)

    const handleChangeMobile = () => {
      if(window.innerWidth < 768){
        setMenuMobile(!menuMobile);
      }
    }

    window.addEventListener('resize',()=>{
      if(window.matchMedia('(min-width: 720px)').matches){
        setMenuMobile(false)
      }
    })

    return(
      <nav className="fixed w-full bg-slate-800 z-50">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-10 py-4 flex-1 w-full">
          <div className="flex items-center w-1/4" >
            <span className="text-3xl font-bold">PORTAFOLIO</span>
          </div>

          {/* Menu modo Desktop */}
          <div className="md:flex hidden w-3/4 items-center font-normal justify-end">
              <MenuNav
                menuMobile={menuMobile}
                setMenuMobile={setMenuMobile}
              />
  
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            {menuMobile && <MenuNav menuMobile={menuMobile} setMenuMobile={setMenuMobile}/>}
          </div>

          {/*Boton abrir menu en Modo Mobile */}
          <button className="block md:hidden transition text-3xl" onClick={handleChangeMobile}>
            {menuMobile ? <FaTimes/> : <CiMenuFries/>}
          </button>
        </div>
    </nav>
    )
  
}
