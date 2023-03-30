import React from 'react';
import Informacoes from '../components/Informacoes';
import Title from './../components/Title/index'

function Sobre() {
    return (
        <div>     
             <Title title='Sobre nossa empresa' text=''/>    
             <Informacoes descricao='  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 
             Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lo
              rem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versio
              ns have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)'/>
        </div>
    )
}

export default Sobre;