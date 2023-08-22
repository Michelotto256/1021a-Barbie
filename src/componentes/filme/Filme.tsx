import './Filme.css'
import imagem from "..//img/foto.jpg";

function Filme(){
    return(
        
        <div className="filme-content">
            <img src="{imagem}" alt="" />
            <div className="text-barbie">
                <h1>Barbie</h1>
                <p className="sinopse">lalalallalalalalalalalalalall alallalalalla alallalalalalal lalalalallalalallalalallalal alalallalalalalallalal barbie</p>
            </div>
        </div>
    )
}
export default Filme