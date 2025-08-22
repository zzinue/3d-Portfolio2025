import React, {useRef} from 'react'
import {gsap} from 'gsap'

import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import TitleHeader from "../components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef=useRef(null)
    const project1Ref=useRef(null)
    const project2Ref=useRef(null)
    const project3Ref=useRef(null)


    useGSAP(()=>{
        const projects=[project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card,index)=>{

            gsap.fromTo(card,{
                    y:50,opacity:0
                },{
                    y:0, opacity:1, duration:1, delay:0.3 *(index+1), scrollTrigger:{
                        trigger:card, start:"top bottom-=100"
                    }
                }
            )

        })
        gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1, duration:1.5})
    },[])

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>

            <div className='w-full'>
                <TitleHeader title='Mis Proyectos completados ' sub='🏢Proyectos Personales'/>
                <div className='showcaselayout mt-22 '>
                    {/*left*/}

                        <div className='first-project-wrapper' ref={project1Ref}>
                            <div className='image-wrapper'>
                                <a   target="_blank" href="https://awwards-site-4nui3tq7h-zzinues-projects.vercel.app/">
                                    <img src='/images/gaming.png' alt='Ryde'/>
                                </a>
                            </div>
                            <div className="text-content">
                                <h2>Plataforma Interactiva de Videojuegos</h2>
                                <p className="text-white-50 md:text-xl">
                                    Moderna Interfaz de video juegos creada con ReactJS y Tailwind CSS. 100% responsiva animada con GSAP.
                                </p>
                            </div>
                        </div>


                    {/*right*/}
                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={project2Ref}>
                                <div className="image-wrapper bg-[#ffefdb]">
                                    <a   target="_blank" href="https://ecommerce-sanity-stripe-zzinue.vercel.app/">
                                        <img src="/images/sanitycommerce.png" alt="Library Management Platform"/>
                                    </a>

                                </div>
                                 <h2>Ecommerce con Sanity</h2>
                                <p className="text-white-50 md:text-xl">Aplicación web creada con React y Next, para gestión de contenidos y pagos en línea con stripe. Implementada con Sanity como principal CMS.</p>
                            </div>
                            <div className="project" ref={project3Ref}>
                                <div className="image-wrapper bg-[#ffe7eb]">
                                    <a  target="_blank" href="https://boostrap-bootcamp-page.vercel.app/">
                                        <img src="/images/tripguide.png" alt=" YC Directory"/>
                                    </a>

                                </div>
                                <h2>Guia de Turistas Landing Page </h2>
                                <p className="text-white-50 md:text-xl">Página web desarrollada con las tecnologías de Bootstrap, HTML y CSS3.</p>
                            </div>
                        </div>

                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
