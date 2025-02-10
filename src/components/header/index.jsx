import "boxicons/css/boxicons.min.css";
import "./styles.css"
export function Header(){
    return(
        <header>
         <a href="#" className={"logo"}> Legínio. </a>
         <i className='bx bx-menu'id="menu-icon"></i>
         <nav>
            <a href="#" className="active">Home</a>
            <a href="#">Servicos</a>
            <a href="#">Resumo</a>
            <a href="#">Contato</a>
         </nav>
        </header>
    )
}