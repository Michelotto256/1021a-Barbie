import './Header.css'
import Link from './../link/Link'

export function Header(){
    return(
    <header> 
        <div>
            <img className="img" src="../src/componentes/barbie-logo.png" alt="" /> 
        </div>
        <nav>
            <ul>
                <li>
                    <Link texto='Home'/>
                </li>
                <li>
                    <Link texto='noticia'/>
                </li>
                <li>
                    <Link texto='sobre'/>
                </li>
                <li>
                    <Link texto='contato'/>
                </li>
            </ul>
        </nav>
        
    </header>
    )
}

export default Header
