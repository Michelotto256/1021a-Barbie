import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeTypes={
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main(){

    const [texto, setTexto ] = useState ()

    const filmes:FilmeTypes[] = [
        {
        id:1,
        titulo:'Barbie', 
        sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.', imagem:'/foto.jpg'
        },
        {
        id:2,
        titulo:'Barbie',
        sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.', imagem:'/foto2.jfif'
        }
    ]
    //let textodigitado = "Barbie"
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }

    return(

        <>
        <div id="divBusca">
            <input type="text" id="txtBusca" placeholder="Buscar..." onChange={TrataTexto} />
        {
            (!texto)?
            "":<p>Resultados: {texto} </p>
        }
        </div>

        <main className='content-main'>

        <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo 
        humano em busca da verdadeira felicidade.' imagem='/foto.jpg'/>

        <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo 
        humano em busca da verdadeira felicidade.' imagem='/foto2.jfif'/>
        
        <Filme titulo='Batman' sinopse='Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.' imagem='/bat.png'/>

        <Filme titulo='Piranha O filme' sinopse='Maggie e Paul soltam por acidente, no lago de um campo de férias, piranhas que foram geneticamente modificadas.' imagem='/pir.jpg'/>

        <Filme titulo='Rambo Até o Fim' sinopse='Um veterano da Guerra do Vietnã usa todo seu treinamento e agressividade exercitada nos campos de batalha quando é preso e torturado por policiais.' imagem='/rmb.jpg'/>

        <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo 
        humano em busca da verdadeira felicidade.' imagem='/foto.jpg'/>
    
        <Filme titulo='Piranha O filme' sinopse='Maggie e Paul soltam por acidente, no lago de um campo de férias, piranhas que foram geneticamente modificadas.' imagem='/pir.jpg'/>

        <Filme titulo='Rambo Até o Fim' sinopse='Um veterano da Guerra do Vietnã usa todo seu treinamento e agressividade exercitada nos campos de batalha quando é preso e torturado por policiais.' imagem='/rmb.jpg'/>

        <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo 
        humano em busca da verdadeira felicidade.' imagem='/foto2.jfif'/>
        
        
        <Filme titulo='Batman' sinopse='Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.' imagem='/bat.png'/>
        </main>
        </>
    )
}