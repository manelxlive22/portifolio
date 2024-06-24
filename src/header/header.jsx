import './header.css'
import logo from "../assets/logo.png"


function Header() {
    return (
        <>
            <header><a href=""><img src={logo} alt="" width="230px" class="logo" /></a>
                <div class="abas">
                    <div class="posicao">
                        <li><a href="" id="sobre">Sobre mim</a></li>
                        <li><a href="" id="sobre">Projetos</a></li>

                        <li> <a href="" id="sobre">Contato</a></li>
                    </div>

                </div>

            </header>
            <div class="inicio">
                <div class="nome">Olá, meu nome é...</div>
                <div class="nome2">Emanuel Thiago</div>
                <div class="web">Desenvolvedor Web</div>
            </div>
           
            
        </>
    )
}
export default Header