import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index'

const filmes = [{
    "nome": "Massacre da Serra Eletrica",
    "genero": "Terror",
    "descricao": "Assassino com Serra Eletrica",
    "foto": "filme1.jpg",
    "duracao": "1H30",
    "assistido": "Sim",
    "nota": 5
},
{
    "nome": "Sexta Feira 13",
    "genero": "Terror",
    "descricao": "Filme de Terror com um Assassino com um facao",
    "foto": "filme2.jpg",
    "duracao": "1h45",
    "assistido": "Sim",
    "nota": 10
},
{
    "nome": "Hora do Pesadelo",
    "genero": "Terror",
    "descricao": "Assassino que mata nos sonhos",
    "foto": "filme3.webp",
    "duracao": "2H00",
    "assistido": "Nao",
    "nota": 7
}]



function Detalhes() {
    const { filme } = useParams();

    return (
        <div className='vh-100'>
            <Title title='Detalhes dos filmes' text='' />
            <div className='container'>
                <div className='row'>
                    {(() => {
                        if (filme === 'It') {
                            return (
                                <div className='col-12'>
                                    <div className='bg-light p-3 d-flex justify-content-center'>
                                        <div className='col-12 col-md-6 d-flex justify-content-center'>
                                            <img src={'/assets/images/' + filmes[0].foto} className='img-fluid mx-auto hover-zoom' alt={filmes[0].nome}></img>
                                        </div>
                                        <div className='col-12 col-md-6 d-flex align-items-center'>
                                            <div>
                                                <p className='text-center'>Filme: {filme}</p>
                                                <p className='text-center'>Duracao: {filmes[0].duracao}</p>
                                                <p className='text-center'>Genero: {filmes[0].genero}</p>
                                                <p className='text-center'>Sinopse: {filmes[0].descricao}</p>
                                                <p className='text-center'>Pontuacao: {filmes[0].nota}</p>
                                                <p className='text-center'>Assistido: {filmes[0].assistido}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (filme === 'John Wick') {
                            return (
                                <div className='col-12'>
                                    <div className='bg-light p-3 d-flex justify-content-center'>
                                        <div className='col-3 col-md-3 d-flex justify-content-center'>
                                            <img src={'/assets/images/' + filmes[1].foto} className='img-fluid mx-auto hover-zoom' alt={filmes[0].nome}></img>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className="pt-5">
                                                <p className='text-center'>Filme: {filme}</p>
                                                <p className='text-center'>Duracao: {filmes[1].duracao}</p>
                                                <p className='text-center'>Genero: {filmes[1].genero}</p>
                                                <p className='text-center'>Sinopse: {filmes[1].descricao}</p>
                                                <p className='text-center'>Pontuacao: {filmes[1].nota}</p>
                                                <p className='text-center'>Assistido: {filmes[1].assistido}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className='col-12'>
                                    <div className='bg-light p-3 d-flex justify-content-center'>
                                        <div className='col-12 col-md-6 d-flex justify-content-center'>
                                            <img src={'/assets/images/' + filmes[2].foto} className='img-fluid mx-auto hover-zoom' alt={filmes[2].nome}></img>
                                        </div>
                                        <div className='col-12 col-md-6 d-flex align-items-center'>
                                            <div>
                                                <p className='text-center'>Filme: {filme}</p>
                                                <p className='text-center'>Duracao: {filmes[2].duracao}</p>
                                                <p className='text-center'>Genero: {filmes[2].genero}</p>
                                                <p className='text-center'>Sinopse: {filmes[2].descricao}</p>
                                                <p className='text-center'>Pontuacao: {filmes[2].nota}</p>
                                                <p className='text-center'>Assistido: {filmes[2].assistido}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}

export default Detalhes;