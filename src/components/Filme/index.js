import "./Filme.css";

const filmes = [
  {
    nome: "It",
    duracao: "2H30",
    foto: "filme1.jpg",
    assistido: true,
    ano: 2018,
    genero: "Terror",
    descricao: "Palhaco assasino",
    nota: 10,
  },
  {
    nome: "John Wick",
    duracao: "1H30",
    foto: "filme2.jpg",
    assistido: true,
    ano: 2014,
    genero: "Ação/Nerd",
    descricao: "Filme da Marvel com super-heróis",
    nota: 5,
  },
  {
    nome: "Titanic",
    duracao: "1H20",
    foto: "filme3.webp",
    assistido: false,
    ano: 2000,
    genero: "Drama",
    descricao: "Barco naufragando e tristeza",
    nota: 5,
  },
];

function Assistido({javisto}) {
  if (javisto) {
    return <p className='text-success'>Filme já assistido</p>;
  } else {
    return <p className='text-danger'>Nao assistido</p>;
  }
}

export default function Filme() {
  return (
    <div className="container text-center">
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i.toString()}>
            <div className="card">
              <img
                src={"/assets/images/" + filme.foto}
                alt={filme.nome}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {filme.nome} ({filme.ano}){" "}
                </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <Assistido javisto = {filme.assistido} />
                <a href={`/detalhes/${filme.nome}`}>
                  <div className="btn btn-primary">Detalhes</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
