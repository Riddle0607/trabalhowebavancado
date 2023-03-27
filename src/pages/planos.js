import React from 'react';
import Title from './../components/Title/index'
import Filme from './../components/Filme/index'

 

function Planos() {
    return (
        <div>
            <Title title='Planos do site' text='' />
            <div className="container text-center">
                <div className="row flex-row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                </h5>
                                <p>Plano A</p>
                                <p>100 Reais</p>
                                <p>Plano muito legal de 100 reais</p>
                                <p className="card-text"></p>
                                <div className="btn btn-primary alert alert-success" role="alert">Comprar</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                </h5>
                                <p>Plano B</p>
                                <p>200 reais</p>
                                <p>Plano muito legal de 200 reais</p>
                                <p className="card-text"></p>
                                <div className="btn btn-primary alert alert-success" role="alert ">Comprar</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                </h5>
                                <p>Plano C</p>
                                <p>300 reais</p>
                                <p>Plano muito legal de 300 reais</p>
                                <p className="card-text"></p>
                                <div className="btn btn-primary alert alert-success" role="alert">Comprar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planos;
