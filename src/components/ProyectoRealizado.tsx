import { ProyectosType } from "../types"
import {  Dialog, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaTimes } from "react-icons/fa";

type ProyectoProps = {
    proyecto: ProyectosType
    
}

export default function ProyectoRealizado({proyecto} : ProyectoProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="transition-all rounded-xl relative border-cyan-400 b_glow cursor-pointer h-80">
        <img src={`./proyectos/${proyecto.imagen}`} alt="" className="object-cover  rounded-xl border-2 h-full w-full opacity-30"/>
        <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-around items-center opacity-1 p-5">
          <h1 className="text-xl font-bold text-white uppercase ">{proyecto.nombre}</h1>
          <p className="font-semibold text-white">Tecnologias: <span className="font-normal">{proyecto.tecnologias}</span></p>
          
          <button 
            className="w-3/4 bg-blue-300 hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 hover:border-transparent rounded transition-colors uppercase text-sm hover:scale-105"
            onClick={() => setIsOpen(true)}
            >
              Ver más
            </button>
        </div>
    </div>

    <Transition show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(!open)}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </TransitionChild>

        <div className="fixed top-24 left-5 right-5 h-[80vh] md:left-40 md:right-40" >
            <div className=" h-full relative">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full flex items-center rounded-2xl shadow-xl transition-all inset-0 absolute">
                  <div className="card bg-base-100 image-full w-full h-full shadow-xl ">
                    <figure>
                      <img
                        src={`./proyectos/${proyecto.imagen}`}
                        alt="Shoes" 
                        className="opacity-75"/>
                    </figure>
                    <div className="card-body overflow-auto flex justify-between">
                      <button className="flex justify-end transition text-3xl text-red-400 hover:text-red-600" onClick={() => setIsOpen(!open)}>
                        <FaTimes/> 
                      </button>
                      <div className="overflow-y-scroll p-2">
                        <h2 className="text-white font-bold text-3xl">{proyecto.nombre}</h2>
                        <p className="text-white text-justify my-5">{proyecto.descripcion}</p>
                      </div>
                      <div className="flex justify-end">
                        <a href={proyecto.link} target="_blank" className="btn btn-primary uppercase text-lg font-bold ">Abrir Proyecto</a>
                      </div>
                    </div>
                  </div>
    
                </Dialog.Panel>
              </TransitionChild>
            </div>
        </div>
      </Dialog>
    </Transition>

    </>
  )
}
