
import styles from './Sobre.module.css'
import avatar from './images/eu.png'
import html from './images/html-5.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/atom.png'
import node from './images/node-js.png'
import sql from './images/files.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} width={'400px'} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Emanuel Thiago</span> <br />
                    <strong>Dev e Estudante</strong> </p>

                    <p>Estudo na area de TI desde 2022.</p>

                    <p>Adoro entender o algoritimo e transforma-lo em codigo.</p>

                    <p>Fico grato com cada professor que ja tive nessa etapa da minha vida.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
    )
}

export default Sobre

