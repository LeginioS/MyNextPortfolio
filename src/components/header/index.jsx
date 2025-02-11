import "boxicons/css/boxicons.min.css";
import "./styles.css"
import Link from "next/link";
export function Header(){
    return(
        <header>
         <a href="#" className={"logo"}> Legínio. </a>
         <i className='bx bx-menu'id="menu-icon"></i>
         <nav>
            <Link href={"/"} className="active">Home</Link>
            <Link href={"/services"}>Servicos</Link>
            <Link href="/resumo">Resumo</Link>
            <Link href={"/portifolio"}>Portfolio</Link>
            <Link href={'/contact'}>Contato</Link>
         </nav>
        </header>
    )
}