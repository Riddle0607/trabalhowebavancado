const cards = [
    {
        plano: "Plano X",
        custo: "40 reais",
        descricao: "Custo beneficio",
    },
    {
        plano: "Plano y",
        custo: "120 reais",
        descricao: "Custo nao tao beneficio",
    },
    {
        plano: "Plano z",
        custo: "500 reais",
        descricao: "Nada Beneficio",
    },
];

function Card() {

    return (
        <div className="container text-center">
            <div className="row flex-row">
                {cards.map((cards, i) => (
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                </h5>
                                <p>{cards.plano}</p>
                                <p>{cards.custo}</p>
                                <p>{cards.descricao}</p>
                                <p className="card-text"></p>
                                <div className="btn btn-primary" role="alert">Comprar</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>          
)
}
export default Card;