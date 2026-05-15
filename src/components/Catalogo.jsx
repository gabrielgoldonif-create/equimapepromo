import CardProduto from "./CardProduto.jsx";

function Catalogo({ produtos, adicionar }) {
  return (
    <section className="catalogo">
      <div className="section-head">
        <h2 className="section-title">Produtos</h2>
      </div>

      <div className="catalogo__grid">
        {produtos.map((produto) => 
          <CardProduto
            key={produto.id}
            produto={produto}
            adicionar={adicionar}
          />
        )}
      </div>
    </section>
  );
}

export default Catalogo;