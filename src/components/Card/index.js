const cards = [
    {
        plano: "Plano A",
        custo: "100 reais",
        descricao: "Plano muito legal de 100 reias",
    },
    {
        plano: "Plano B",
        custo: "200 reais",
        descricao: "Plano muito legal de 200 reias",
    },
    {
        plano: "Plano C",
        custo: "300 reais",
        descricao: "Plano muito legal de 300 reias",
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
                                <p>{cards.dinheiro}</p>
                                <p>{cards.descricao}</p>
                                <p className="card-text"></p>
                                <div className="btn btn-primary alert alert-success" role="alert">Comprar</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>          
)
}
export default Card;