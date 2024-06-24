import './header.css'
import logo from "../assets/logo.png"


function Header(){
    return(
        <>  
         <header id="inicio">
    <div class="logo"><img src={logo} width="200px" alt=""/></div>
    <div class="abas">

      <li><a href="">Sobre mim</a></li>
      <li><a href="">Capacidades</a></li>

      <li> <a href="">Contato</a></li>

      


  
    </div>


  </header>
        </>
    )
 }
 export default Header