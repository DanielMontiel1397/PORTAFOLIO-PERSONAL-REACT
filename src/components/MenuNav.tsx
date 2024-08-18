import LinksNav from "./LinksNav"

type MenuNavProps = {
    menuMobile: boolean
    setMenuMobile: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuNav({menuMobile, setMenuMobile} : MenuNavProps) {
  return (
    <ul 
    className={menuMobile ? "text-center text-x" : "flex gap-8 text-lg items-center"}>
        
        <LinksNav
        direccion="Inicio"
        seccion="Inicio"
        mobile={menuMobile}
        setMobile={setMenuMobile}
        />
        <LinksNav
        direccion="Acerca"
        seccion="Acerca de"
        mobile={menuMobile}
        setMobile={setMenuMobile}
        />
        <LinksNav
        direccion="Servicios"
        seccion="Servicios"
        mobile={menuMobile}
        setMobile={setMenuMobile}
        />
        <LinksNav
        direccion="Proyectos"
        seccion="Proyectos"
        mobile={menuMobile}
        setMobile={setMenuMobile}
        />

  </ul>
  )
}
