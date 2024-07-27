import { SiBootstrap, SiJavascript, SiMysql, SiPhp } from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Inmuebles",
        description:
            "Agencia inmoiliaria que busca publicitar sus propiedades en la web. Cuenta con un panel de administración para gestionar las propiedades y un buscador para los usuarios.",
        technologies: [SiPhp, SiJavascript, SiBootstrap, SiMysql],
        techNames: ["Php", "Javascript", "Bootstrap", "Mysql"],
        techLinks: [
            "https://www.php.net/",
            "https://developer.mozilla.org/es/",
            "https://getbootstrap.com/",
            "https://www.mysql.com/",
        ],
        github: "https://github.com/pablomil2000/inmuebles",
        demo: "http://pablodev.ihostfull.com/",
        image: "/projects/Buhardilla.png",
        available: false,
    },
    {
        id: 0,
        name: "Gestion Sanitaria",
        description:
            "Un negocio local buscaba una aplicación para gestionar la trazabilidad de todos sus articulos. Se desarrollo un sistema de gestion de stock y trazabilidad de productos.",
        technologies: [SiPhp, SiJavascript, SiBootstrap, SiMysql],
        techNames: ["Php", "Javascript", "Bootstrap", "Mysql"],
        techLinks: [
            "https://www.php.net/",
            "https://developer.mozilla.org/es/",
            "https://getbootstrap.com/",
            "https://www.mysql.com/",
        ],
        github: "https://github.com/pablomil2000/sanidad",
        demo: "http://pablodev.ihostfull.com/",
        image: "/projects/Buhardilla.png",
        available: false,
    },
    {
        id: 0,
        name: "La Buhardilla",
        description:
            "Se buscaba crear una red social en la que los distitos usuarios pudieran compartir sus colecciones de videojuegos y consolas. Se desarrollo una red social con un sistema de colecciones y valoraciones.",
        technologies: [SiPhp, SiJavascript, SiBootstrap, SiMysql],
        techNames: ["Php", "Javascript", "Bootstrap", "Mysql"],
        techLinks: [
            "https://www.php.net/",
            "https://developer.mozilla.org/es/",
            "https://getbootstrap.com/",
            "https://www.mysql.com/",
        ],
        github: "https://github.com/pablomil2000/Coleccion-juegos",
        demo: "http://pablodev.ihostfull.com/",
        image: "/projects/Buhardilla.png",
        available: false,
    },
];
