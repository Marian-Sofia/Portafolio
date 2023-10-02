import style from "./Proyectos.module.css";
import { BiLogoJavascript, BiLogoCss3, BiLogoReact, BiLogoRedux, BiLogoPostgresql, BiLogoGit, BiLogoNodejs } from "react-icons/bi";
import { SiExpress, SiSequelize, SiAmazonaws, SiMercadopago } from "react-icons/si";


const Proyectos = () => {
  return (
    <div id="proyectos" className={style.contain}>
      <h1 className={style.title}>Mis Proyectos</h1>
      <div className={style.container}>
        <h2 className={style.proyect}>GreenScreen</h2>
        <div className={style.section}>
          <ul className={style.ul}>
            <li className={style.li}>
              <img className={style.img} src="https://i.ibb.co/BKWc1RV/Whats-App-Image-2023-09-26-at-3-29-00-PM.jpg" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="https://i.ibb.co/BLSjZVk/Whats-App-Image-2023-09-26-at-3-28-59-PM.jpg" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="https://i.ibb.co/0QY7Jb4/Whats-App-Image-2023-09-26-at-3-29-00-PM-1.jpg" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="https://i.ibb.co/D9wswT1/Whats-App-Image-2023-09-26-at-4-31-43-PM.jpg" />
            </li>
          </ul>
        </div>
        <p className={style.text}>
          <span className={style.span}>GreenScreen </span>es una plataforma web dedicada al mundo del cine y las películas. Los usuarios pueden explorar una extensa biblioteca de películas, publicar reseñas y comentarios, así como realizar donaciones para apoyar a los desarrolladores. La plataforma ofrece características avanzadas, incluyendo filtros de búsqueda, una pasarela de pagos segura, almacenamiento de medios en Cloudinary y un panel de administración para el control total de la comunidad. GreenScreen es el destino definitivo para los amantes del cine, donde podrán descubrir, disfrutar y contribuir al emocionante universo cinematográfico.
        </p>

        <div className={style.containBtn}>
          <a
            target="_blank"
            href="https://movies-front-tau.vercel.app/"
            className={style.btn}
          >
            Deploy
          </a>
          <a
            target="_blank"
            href="https://github.com/MoviesPf"
            className={style.btnRepo}
          >
            Repositorio
          </a>
        </div>

        <div className={style.skills}>
          <span className={style.span}>Tecnologias usadas:</span>
          <div className={style.contIcons}>
            <BiLogoJavascript className={style.js} />
            <BiLogoCss3 className={style.css} />
            <BiLogoReact className={style.react} />
            <SiExpress className={style.express} />
            <BiLogoRedux className={style.redux} />
            <BiLogoPostgresql title='POSTGRES' className={style.postgres} />
            <SiSequelize title='SEQUELIZE' className={style.sequelize} />
            <BiLogoGit title='GIT' className={style.git} />
            <BiLogoNodejs title='NODEJS' className={style.node} />
            <SiAmazonaws title='AWS' className={style.aws} />
            <SiMercadopago title='MERCADO PAGO' className={style.mercado} />
          </div>
        </div>
      </div>

      <div className={style.container}>
        <h2 className={style.proyect}>PF Henrify</h2>
        <div className={style.section}>
          <ul className={style.ul}>
            <li className={style.li}>
              <img className={style.img} src="https://i.ibb.co/Lh6SCVk/login.png" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="https://i.ibb.co/Q8s7jDg/homepf.png" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="https://i.ibb.co/YyVxYth/songspf.png" />
            </li>
            <li className={style.li}>
              <img className={style.img} src="https://i.ibb.co/GvD5Qjs/admin.png" />
            </li>
          </ul>
        </div>
        <p className={style.text}>
          <span className={style.span}>Soul Music </span> es una plataforma web que ofrece a los amantes de la música una experiencia auditiva personalizada. Los usuarios pueden explorar una amplia biblioteca musical, crear listas de
          reproducción personalizadas y marcar sus canciones favoritas. Además, Soul Music ofrece membresías premium con contenido directamente desde la plataforma. Con una pasarela de pagos segura y un panel de administración completo.
        </p>

        <div className={style.containBtn}>
          <a
            target="_blank"
            href="https://soul-music-pf.netlify.app/home"
            className={style.btn}
          >
            Deploy
          </a>
          <a
            target="_blank"
            href="https://github.com/Marian-Sofia/PF-Henrify"
            className={style.btnRepo}
          >
            Repositorio
          </a>
        </div>

        <div className={style.skills}>
          <span className={style.span}>Tecnologias usadas:</span>
          <div className={style.contIcons}>
            <BiLogoJavascript className={style.js} />
            <BiLogoCss3 className={style.css} />
            <BiLogoReact className={style.react} />
            <SiExpress className={style.express} />
            <BiLogoRedux className={style.redux} />
            <BiLogoPostgresql title='POSTGRES' className={style.postgres} />
            <SiSequelize title='SEQUELIZE' className={style.sequelize} />
            <BiLogoGit title='GIT' className={style.git} />
            <BiLogoNodejs title='NODEJS' className={style.node} />
            <SiAmazonaws title='AWS' className={style.aws} />
            <SiMercadopago title='MERCADO PAGO' className={style.mercado} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
