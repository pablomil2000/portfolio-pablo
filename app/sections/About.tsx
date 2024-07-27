import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Sobre mi"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Hola, soy Pablo Martín, un apasionado desarrollador web con una sólida formación en ciencias y una especialización en el desarrollo de aplicaciones web. Siempre he estado profundamente interesado en la tecnología y la programación. Esta pasión me llevó a obtener un Grado Superior en Desarrollo de Aplicaciones Web, donde adquirí habilidades técnicas avanzadas y experiencia práctica en el desarrollo de soluciones innovadoras." />

                        <AnimatedBody
                            delay={0.1}
                            text="Durante mis formacion, trabajé en diversos proyectos que me permitieron desarrollar competencias en lenguajes de programación como PHP, Java o JavaScript, y frameworks como React, Bootrap o Laravel. Además, he tenido la oportunidad de trabajar con bases de datos y en el testeo y control de calidad del producto antes de la entrega al cliente. Lo que me ha proporcionado una visión completa del ciclo de vida del desarrollo de software."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Me encanta enfrentarme a nuevos desafíos y aprender continuamente para mejorar mis habilidades. Busco una oportunidad para aplicar mis conocimientos y experiencia en un entorno profesional, donde pueda contribuir al éxito de proyectos innovadores y seguir creciendo como desarrollador."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
