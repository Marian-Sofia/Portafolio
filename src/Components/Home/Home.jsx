import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.contain}>
            <img className={style.img} src='src\Img\Avatar-removebg-preview.png'/>
            <h1 className={style.title}>BIENVENIDOS, YO SOY</h1>
            <h2 className={style.name}>MARIAN SOFIA</h2>
            <h3 className={style.text}>Desarrolladora Web Full Stack, con residencia en Colombia. Soy una persona segura de sí misma, curiosa por naturaleza y siempre estoy trabajando para mejorar mis habilidades en la resolucion de un problema a la vez.</h3>
        </div>
    )
}

export default Home;