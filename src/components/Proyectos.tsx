
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, EffectCoverflow, Navigation} from "swiper/modules";
import { proyectos } from "../data/proyectos";
import ProyectoRealizado from "./ProyectoRealizado";


export default function Proyectos() {

  return (
    <section id="Proyectos" className="min-h-screen flex flex-col items-center justify-center pt-20 sm:text-ellipsis ">
        <h1 data-aos="fade-right" className="text-4xl font-semibold leading-normal uppercase text-[#A8B2D1]">Proyectos</h1>
        <div data-aos="zoom-in" className="sm:w-4/5 w-full">

            <Swiper
                breakpoints = {{
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 30 
                    },
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 60
                    }
                }}
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mx-5 p-5"
                >

                    {proyectos.map((proyecto) => (
                        <SwiperSlide
                            className=""
                            key={proyecto.id}>
                            <ProyectoRealizado
                                proyecto={proyecto}
                            />

                        </SwiperSlide>
                    ))}
                   
                
            </Swiper>
        </div>
    </section>
  )
}
