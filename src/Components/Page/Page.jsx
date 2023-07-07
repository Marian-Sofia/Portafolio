import style from './Page.module.css'
import Aside from '../Aside/Aside'

const Page = () => {
  return (
    <div className={style.contain}>
      <Aside/>
      <h1 className={style.title}>aaaaaaaaaaaaaaaa</h1>
    </div>
  )
}

export default Page;