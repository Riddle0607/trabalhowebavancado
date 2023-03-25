import React from 'react';
import Filme from './../components/Filme/index';
import Title from './../components/Title/index'

function Home() {
    return (
        <>
        <Title title='Catalogo de filmes' text='Filmes disponiveis'/>
        <Filme />
        </>
    )
}
export default Home;