
function Informacoes({descricao,imagem}){
return(
<div className='container'>
                <div className='row'>
                    <div className='col-10'>
                      <p>{descricao}</p>
                    </div>
                    <div class='col-2'>
                        <img className='img-fluid' src={'/assets/images/logo.jpg' }>{imagem}</img>
                    </div>
                </div>
             </div>
)
}
export default Informacoes;