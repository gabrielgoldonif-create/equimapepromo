function Resumo({ carrinho, adicionar, remover, enviarWhatsApp }) {
  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <section className="resumo">
      <div className="resumo__box">
        <div className="section-head">
          <h2 className="section-title">Resumo do pedido</h2>
          <p className="section-text">
            {carrinho.length === 0
              ? "Nenhum produto selecionado."
              : "Confira os itens antes de enviar."}
          </p>
        </div>

        <div className="resumo__list">
          {carrinho.map((item) => (
            <div className="resumo__item" key={item.id}>
              <div>
  <p className="resumo__codigo">Ref: {item.id}</p>

  <strong>{item.nome}</strong>

  <p>
    R$ {item.preco.toFixed(2)} cada · Subtotal: R${" "}
    {(item.preco * item.quantidade).toFixed(2)}
  </p>
</div>

              <div className="resumo__controls">
                <button
                  className="qty-btn"
                  onClick={() => remover(item.id)}
                >
                  -
                </button>

                <span>{item.quantidade}</span>

                <button
                  className="qty-btn"
                  onClick={() => adicionar(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="resumo__total">
          <span>Total</span>
          <strong>R$ {total.toFixed(2)}</strong>
        </div>

        <button className="btn btn--primary" onClick={enviarWhatsApp}>
          Enviar pedido no WhatsApp
        </button>
      </div>
    </section>
  );
}

export default Resumo;