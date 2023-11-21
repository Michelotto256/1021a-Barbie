import './Footer.css'
import Link from '../linknav/LinkNav'
import imagem from "..//img/barbiefooter.png";


export function Footer(){
    return(
    <footer>
        <div className='conteudo'>
            <div className='coisas'>
                <img className='logofooter' src={imagem} alt="" />
            </div>
            <ul className="lista">
                <li>
                    <h3>Life in the DreamHouse</h3>
                </li>
                <li>
                    <Link url="#" texto='Compre sua Barbie'/>
                </li>
                <li>
                    <Link url="#" texto='Monte sua Barbie'/>
                </li>
                <li>
                    <Link url="#" texto='Acessórios'/>
                </li>
            </ul>

            <ul className="lista">
                <li>
                    <h3>Contato</h3>
                </li>
                <li>
                    <Link url="#" texto='Cookies'/>
                </li>
                <li>
                    <Link url="#" texto='Sobre'/>
                </li>
                <li>
                    <Link url="#" texto='Termos e Condições'/>
                </li>
            </ul>


        </div>
    </footer>
    )
}


export default Footer
