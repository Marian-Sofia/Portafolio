import style from './AboutMe.module.css'

const AboutMe = () => {
    return(  
        <div id='sobreMi' className={style.contain}>
            <h2 className={style.title} >Sobre Mi</h2>
            <p className={style.text} >
                Soy una apasionada <span className={style.span}>desarrolladora web</span> con experiencia en el desarrollo de <span className={style.span} >aplicaciones backend</span> y conocimientos sólidos en tecnologías de <span className={style.span} >frontend</span>. Me especializo en la creación de <span>soluciones robustas y escalables</span>, centrándome en <span className={style.span} >la eficiencia</span> y <span className={style.span} >la calidad</span> del código. Con habilidades de <span className={style.span} >resolución de problemas</span> y un enfoque meticuloso en los detalles, me dedico a desarrollar productos web de alto rendimiento y funcionalidad. Mis estudios fueron realizados en el <span className={style.span} >Bootcamp de Soy Henry</span> en Argentina, el cual tuvo una duracion al rededor de <span className={style.span} >750 horas </span>full time, en donde recibo un titulo de <span className={style.span} >Programadora Web Full Stack</span>.
            </p>
            <span className={style.span} ></span>
      </div>
    )
}

export default AboutMe;