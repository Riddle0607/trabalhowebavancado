import "./Filme.css";

const filmes = [
  {
    nome: "Massacre da Serra Eletrica",
    duracao: "1H30",
    foto: "filme1.jpg",
    assistido: true,
    ano: 1998,
    genero: "Terror",
    descricao: "Assassino com Serra Eletrica",
    nota: 5,
  },
  {
    nome: "Sexta Feira 13",
    duracao: "1H45",
    foto: "filme2.jpg",
    assistido: true,
    ano: 1999,
    genero: "Terror",
    descricao: "Filme terror com um Assassino com um facao",
    nota: 10,
  },
  {
    nome: "Hora do Pesadelo",
    duracao: "2h00",
    foto: "filme3.webp",
    assistido: false,
    ano: 1980,
    genero: "Terror",
    descricao: "Assassino que te mata nos sonhos",
    nota: 6,
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
                <p className="card-text">Descricao: {filme.descricao}</p>
                <p>Duracao: {filme.duracao}</p>
                <p>Genero: {filme.genero}</p>
                <p>Nota: {filme.nota}</p>
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
