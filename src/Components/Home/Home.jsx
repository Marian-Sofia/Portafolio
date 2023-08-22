import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.contain}>
            <img className={style.img} src='https://i.ibb.co/TH8TxZY/Yo-bonita.jpg'/>
            <h1 className={style.title}>BIENVENIDOS, YO SOY</h1>
            <h2 className={style.name}>MARIAN SOFIA</h2>
            <h3 className={style.text}>Desarrolladora Web Full Stack, con residencia en Colombia. Soy una persona segura de sí misma, curiosa por naturaleza y siempre estoy trabajando para mejorar mis habilidades en la resolucion de un problema a la vez.</h3>
            <a className={style.CV} href='https://drive.google.com/file/d/1ElZ27WB1hBMIIuBZrlZzJDIBkU6QjjhU/view?usp=sharing' download target='_blank' >MI CV</a>
        </div>
    )
}

export default Home;