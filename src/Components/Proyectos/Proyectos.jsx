import style from "./Proyectos.module.css";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Proyectos = () => {
  return (
    <div id="proyectos" className={style.contain}>
      <h1 className={style.title}>Mis Proyectos</h1>
      <div className={style.container}>
        <h2 className={style.proyect}>PI Dogs</h2>
        <div className={style.section}>
          <ul className={style.ul}>
            <li className={style.li}>
              <img className={style.img} src="src\Img\landing.png" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="src\Img\home.png" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="src\Img\search.png" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="src\Img\detail.png" />
            </li>
          </ul>
        </div>
        <p className={style.text}>
          Experiencia academica de proyecto individual del <span className={style.span}>Henry Bootcamp.</span> Constaba de desarrollar una <span className={style.span}>SPA</span> que incluia filtros de conjunto, formulario para la creación de una nueva raza de perro, paginado con cartas donde se mostraban 8 perros por página,
          manejo de rutas, Api rest y CRUD completo. Con tecnologias como: <span className={style.span}> React, Redux, CSS, NodeJS, Express, PostgreSQL con Sequelize.</span>
        </p>
        <a
          target="_blank"
          href="https://github.com/Marian-Sofia/Dogs-PI"
          className={style.btn}
        >
          Repositorio
        </a>
      </div>

      <div className={style.container}>
        <h2 className={style.proyect}>PF Henrify</h2>
        <div className={style.section}>
          <ul className={style.ul}>
            <li className={style.li}>
              <img className={style.img} src="src\Img\login.png" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="src\Img\homepf.png" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="src\Img\songspf.png" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="src\Img\admin.png" />
            </li>
          </ul>
        </div>
        <p className={style.text}>
          Experiencia academica de proyecto final del <span className={style.span}>Henry Bootcamp.</span> Constaba de desarrollar un <span className={style.span}>E-Commerce</span> Login de usuarios, vista de las canciones y albums, filtros combinados, carrito de compras, pasarela de pagos, cloudinary, api rest y panel de admin. Con tecnologias como: <span className={style.span}> React, Redux, CSS, NodeJS, Express, AWS, Mercado Pago, PostgreSQL con Sequelize.</span>
        </p>
        <a
          target="_blank"
          href="https://github.com/Marian-Sofia/PF-Henrify"
          className={style.btn}
        >
          Repositorio
        </a>
      </div>
    </div>
  );
};

export default Proyectos;
