import React, { useState, useEffect } from "react";
import Filme from './../filme/Filme'
import './Main.css'
import axios from 'axios'

type FilmeTypes={
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

const URL_API = "http://localhost:3000/filmes";


export default function Main(){

    const [texto, setTexto ] = useState ("")

    const [filmes, setFilmes] = useState<FilmeTypes[]>([]);

  useEffect(() => {
    const buscarFilmes = async () => {
      try {
        const resposta = await axios.get<FilmeTypes[]>(URL_API);
        setFilmes(resposta.data);
      } catch (error) {
        console.log('Erro ao buscar os dados:');
      }
    };

    buscarFilmes();
  }, []);


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

        {/* 
                    Use algo do vetor para tentar criar os filmes 
                */}
                {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }

        </main>
        </>
    )
}