import { useState } from "react";

function CardProduto({ produto, adicionar }) {
  const [aberto, setAberto] = useState(false);

  return (
    <article className={`card-produto ${aberto ? "card-produto--aberto" : ""}`}>
      <img
        className="card-produto__img"
        src={produto.imagem}
        alt={produto.nome}
      />

      <div className="card-produto__body">
        {produto.desconto > 0 && (
          <span className="card-produto__discount">
            {produto.desconto}% OFF
          </span>
        )}


        <h3 className="card-produto__title">{produto.nome}</h3>

        {produto.precoAntes > 0 && (
          <p className="card-produto__old-price">
            De R$ {produto.precoAntes.toFixed(2)}
          </p>
        )}

        <p className="card-produto__price">
          Por R$ {produto.preco.toFixed(2)}
        </p>

        <button
          className="card-produto__obs-btn"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? "Ocultar observação" : "Ver observação"}
        </button>

        {aberto && (
          <p className="card-produto__desc">
            {produto.descricao}
          </p>
        )}

        <button
          className="btn btn--secondary"
          onClick={() => adicionar(produto)}
          disabled={!produto.disponivel}
        >
          {produto.disponivel ? "Adicionar" : "Indisponível"}
        </button>
      </div>
    </article>
  );
}

export default CardProduto;