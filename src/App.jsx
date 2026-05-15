import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Catalogo from "./components/Catalogo.jsx";
import Resumo from "./components/Resumo.jsx";

const whatsappNumber = "5567999757771";


const produtos = [
  {
    id: 9533,
    nome: "Gaveteiro Móvel com Rodinha e Chave",
    precoAntes: 0.0,
    preco: 571.0,
    desconto: 0,
    disponivel: true,
    descricao: "Gaveteiro com 3 gavetas, rodinhas para fácil movimentação e chave para mais segurança. Ideal para manter materiais e objetos do dia a dia sempre organizados no seu espaço de estudos.",
    imagem: `${import.meta.env.BASE_URL}fotos/9533.png`,
  },
  {
    id: 9531,
    nome: "Gaveteiro Móvel com Rodinha e Chave",
    precoAntes: 0.0,
    preco: 571.0,
    desconto: 0,
    disponivel: true,
    descricao: "Gaveteiro com 3 gavetas, rodinhas para fácil movimentação e chave para mais segurança. Ideal para manter materiais e objetos do dia a dia sempre organizados no seu espaço de estudos.",
    imagem: `${import.meta.env.BASE_URL}fotos/9531.png`,
  },
  {
    id: 9532,
    nome: "Gaveteiro Móvel com Rodinha e Chave",
    precoAntes: 0.0,
    preco: 571.0,
    desconto: 0,
    disponivel: true,
    descricao: "Gaveteiro com 3 gavetas, rodinhas para fácil movimentação e chave para mais segurança. Ideal para manter materiais e objetos do dia a dia sempre organizados no seu espaço de estudos.",
    imagem: `${import.meta.env.BASE_URL}fotos/9532.png`,
  },
  {
    id: 9519,
    nome: "Mesa",
    precoAntes: 0.0,
    preco: 569.0,
    desconto: 0,
    disponivel: true,
    descricao: "Mesa prática e funcional, ideal para estudos, home office e rotina do dia a dia. Um espaço confortável para manter foco, organização e produtividade.",
    imagem: `${import.meta.env.BASE_URL}fotos/9519.png`,
  },
  {
    id: 9524,
    nome: "Mesa",
    precoAntes: 0.0,
    preco: 569.0,
    desconto: 0,
    disponivel: true,
    descricao: "Mesa compacta perfeita para quartos e ambientes menores, trazendo praticidade e conforto para estudar, trabalhar ou organizar seus materiais.",
    imagem: `${import.meta.env.BASE_URL}fotos/9524.png`,
  },
  {
    id: 9525,
    nome: "Mesa",
    precoAntes: 0.0,
    preco: 569.0,
    desconto: 0,
    disponivel: true,
    descricao: "Mesa com design moderno e ótimo espaço de uso, ideal para quem precisa de um ambiente organizado para aulas, leituras e tarefas diárias.",
    imagem: `${import.meta.env.BASE_URL}fotos/9525.png`,
  },
  {
    id: 9518,
    nome: "Mesa com Gaveteiro",
    precoAntes: 0.0,
    preco: 571.0,
    desconto: 0,
    disponivel: true,
    descricao: "Mesa com 2 gavetas e chave, perfeita para guardar materiais, documentos e itens pessoais com mais segurança, mantendo seu espaço de estudos sempre organizado e funcional.",
    imagem: `${import.meta.env.BASE_URL}fotos/9532.png`,
  },
  {
    id: 9523,
    nome: "Gaveteiro Móvel com Rodinha e Chave",
    precoAntes: 0.0,
    preco: 571.0,
    desconto: 0,
    disponivel: true,
    descricao: "Gaveteiro com 3 gavetas, rodinhas para fácil movimentação e chave para mais segurança. Ideal para manter materiais e objetos do dia a dia sempre organizados no seu espaço de estudos.",
    imagem: `${import.meta.env.BASE_URL}fotos/9523.png`,
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