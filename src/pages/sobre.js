import React from 'react';
import Title from './../components/Title/index'

function Sobre() {
    return (
        <div>     
             <Title title='Sobre' text='Sobre nossa empresa'/>    
             <div className='container'>
                <div className='row'>
                    <div className='col-10'>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged. It was popularised 
                         in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                         and more recently with desktop
                         publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div class='col-2'>
                        <img className='img-fluid' src={'/assets/images/logo.jpg' }></img>
                    </div>
                </div>
             </div>

        </div>
    )
}

export default Sobre;