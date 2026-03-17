function CardProduto({ produto, adicionar }) {
  return (
    <article className="card-produto">
      <img
        className="card-produto__img"
        src={produto.imagem}
        alt={produto.nome}
      />

      <div className="card-produto__body">
        <h3 className="card-produto__title">{produto.nome}</h3>
        <p className="card-produto__desc">{produto.descricao}</p>
        <p className="card-produto__price">R$ {produto.preco.toFixed(2)}</p>

        <button
          className="btn btn--secondary"
          onClick={() => adicionar(produto)}
        >
          Adicionar
        </button>
      </div>
    </article>
  );
}

export default CardProduto;