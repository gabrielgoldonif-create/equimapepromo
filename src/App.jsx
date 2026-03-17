import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalogo from "./components/Catalogo";
import Resumo from "./components/Resumo.jsx";

const whatsappNumber = "5500000000000";

const produtos = [
  {
    id: 1,
    nome: "Mesa Compacta de Estudo",
    preco: 299.9,
    descricao: "Ideal para quartos e espaços pequenos",
    imagem: "https://via.placeholder.com/300x220",
  },
  {
    id: 2,
    nome: "Cadeira de Estudo",
    preco: 199.9,
    descricao: "Conforto para rotina de estudos",
    imagem: "https://via.placeholder.com/300x220",
  },
  {
    id: 3,
    nome: "Gaveteiro Organizador",
    preco: 149.9,
    descricao: "Mais organização no dia a dia",
    imagem: "https://via.placeholder.com/300x220",
  },
];

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionar(produto) {
    setCarrinho((prev) => {
      const itemExistente = prev.find((item) => item.id === produto.id);

      if (itemExistente) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...prev, { ...produto, quantidade: 1 }];
    });
  }

  function remover(id) {
    setCarrinho((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function gerarMensagem() {
    let texto = "Olá! Tenho interesse nos seguintes móveis:\n\n";

    carrinho.forEach((item) => {
      texto += `- ${item.nome} (${item.quantidade}x) - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });

    const total = carrinho.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );

    texto += `\nTotal: R$ ${total.toFixed(2)}`;
    texto += "\n\nGostaria de mais informações sobre pagamento e entrega.";

    return encodeURIComponent(texto);
  }

  function enviarWhatsApp() {
    if (carrinho.length === 0) return;

    const mensagem = gerarMensagem();
    const url = `https://wa.me/${whatsappNumber}?text=${mensagem}`;
    window.open(url, "_blank");
  }

  return (
    <div className="app">
      <Header />
      <Hero />
      <Catalogo produtos={produtos} adicionar={adicionar} />
      <Resumo
        carrinho={carrinho}
        adicionar={adicionar}
        remover={remover}
        enviarWhatsApp={enviarWhatsApp}
      />
    </div>
  );
}

export default App;