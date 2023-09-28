import './Header.css'
import Link from '../linknav/LinkNav'
import imagem from "..//img/barbie-logo.png";


export function Header(){
    return(
    <header> 
        <div>
            <img className='imgheader' src={imagem} alt="" /> 
        </div>
        <nav>
            <ul>
                <li>
                    <Link url="/" texto='Home'/>
                </li>
                <li>
                    <Link url="/noticias" texto='noticia'/>
                </li>
                <li>
                    <Link url="/sobre" texto='sobre'/>
                </li>
                <li>
                    <Link url="/contato" texto='contato'/>
                </li>
            </ul>
        </nav>
        
    </header>
    )
}

export default Header
