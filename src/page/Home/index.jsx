
import { Link } from 'react-router-dom'
import img1 from "../../components/Header/developer-red.svg"

import styles from './Home.module.css'
function Home() {
  return (
    <>
      
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br />
              <span>Emanuel Thiago</span> <br />
              Desenvolvedor Web e Mobile
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src={img1} alt="Imagem de Home" />
      </figure>
  </section>

      
    </>
  )
}

export default Home
