import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index'

const filmes = [{
    "nome": "It a coisa",
    "genero": "Terror",
    "descricao": "Palhaco assassino",
    "foto": "filme1.jpg",
    "duracao": "1h50",
    "assistido": "Sim",
    "nota": 10
},
{
    "nome": "John Wick",
    "genero": "Ação",
    "descricao": "Filme de acao",
    "foto": "filme2.jpg",
    "duracao": "2h30",
    "assistido": "Sim",
    "nota": 10
},
{
    "nome": "Vingadores ",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "foto": "vingadores.png",
    "duracao": "1h30",
    "assistido": "Nao",
    "nota": 2
}]



function Detalhes() {
    const { filme } = useParams();

    return (
        <div className='vh-100'>
            <Title title='Detalhe' text='Detalhes dos filmes' />
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
                                        <div className='col-12 col-md-6 d-flex justify-content-center'>
                                            <img src={'/assets/images/' + filmes[1].foto} className='img-fluid mx-auto hover-zoom' alt={filmes[1].nome}></img>
                                        </div>
                                        <div className='col-12 col-md-6 d-flex align-items-center'>
                                            <div>
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
                                        <div className='col-12 col-md-4 d-flex justify-content-center'>
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