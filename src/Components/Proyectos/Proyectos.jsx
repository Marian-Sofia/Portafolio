import style from './Proyectos.module.css'

const Proyectos = () => {
    return (
        <div id='proyectos' className={style.contain}>
            <h1 className={style.title}>Mis Proyectos</h1>
            <div className={style.container}>
                <h2 className={style.proyect}>Primer Proyecto</h2>
                <img className={style.img} src='src\Img\random.jpg' />
                <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestias dicta eius, reprehenderit fugit consequuntur sed eveniet non commodi minus facere ex nulla earum tempore aliquam animi ad illum suscipit!</p>
            </div>
            <div className={style.container}>
                <h2 className={style.proyect}>Segundo Proyecto</h2>
                <img className={style.img} src='src\Img\random.jpg' />
                <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestias dicta eius, reprehenderit fugit consequuntur sed eveniet non commodi minus facere ex nulla earum tempore aliquam animi ad illum suscipit!</p>
            </div>
        </div>
    )
}

export default Proyectos;