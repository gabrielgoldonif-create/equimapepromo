import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Catalogo from "./components/Catalogo.jsx";
import Resumo from "./components/Resumo.jsx";

const whatsappNumber = "5567996065505";


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
    nome: "Mesa 1,50 M ",
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
    imagem: `${import.meta.env.BASE_URL}fotos/9518.png`,
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
  {
  id: 9474,
  nome: "Cadeira Ergonômica Executiva",
  precoAntes: 1076.0,
  preco: 860.0,
  desconto: 20,
  disponivel: true,
  descricao:
    "Cadeira executiva ergonômica com encosto em tela cinza, assento laranja em poliéster e braços com regulagem de altura. Mais conforto para estudos, trabalho e rotina diária. Garantia de 06 anos pelo fabricante.",
  imagem: `${import.meta.env.BASE_URL}fotos/9474.png`,
},

{
  id: 9472,
  nome: "Cadeira Ergonômica Executiva",
  precoAntes: 1076.0,
  preco: 860.0,
  desconto: 20,
  disponivel: true,
  descricao:
    "Cadeira executiva ergonômica com encosto em tela cinza, assento terracota em vinil e braços com regulagem de altura. Conforto e praticidade para home office e estudos. Garantia de 06 anos pelo fabricante.",
  imagem: `${import.meta.env.BASE_URL}fotos/9472.png`,
},

{
  id: 9331,
  nome: "Cadeira Ergonômica Executiva",
  precoAntes: 1076.0,
  preco: 860.0,
  desconto: 20,
  disponivel: true,
  descricao:
    "Cadeira executiva ergonômica com encosto em tela cinza, assento azul médio em poliéster e braços com regulagem de altura. Ideal para longos períodos de uso com mais conforto. Garantia de 06 anos pelo fabricante.",
  imagem: `${import.meta.env.BASE_URL}fotos/9331.png`,
},

{
  id: 9475,
  nome: "Cadeira Ergonômica Executiva",
  precoAntes: 965.0,
  preco: 775.0,
  desconto: 20,
  disponivel: true,
  descricao:
    "Cadeira executiva ergonômica com encosto em tela preta, assento azul em vinil e braços com regulagem de altura. Mais conforto e estilo para sua rotina. Garantia de 06 anos pelo fabricante.",
  imagem: `${import.meta.env.BASE_URL}fotos/9475.png`,
},

{
  id: 9329,
  nome: "Cadeira Ergonômica Executiva",
  precoAntes: 965.0,
  preco: 775.0,
  desconto: 20,
  disponivel: true,
  descricao:
    "Cadeira executiva ergonômica com encosto em tela cinza, assento cinza em vinil e braços com regulagem de altura. Ideal para estudos, escritório e home office. Garantia de 06 anos pelo fabricante.",
  imagem: `${import.meta.env.BASE_URL}fotos/9329.png`,
},

{
  id: 8365,
  nome: "Cadeira Ergonômica Executiva",
  precoAntes: 965.0,
  preco: 775.0,
  desconto: 20,
  disponivel: true,
  descricao:
    "Cadeira executiva ergonômica com encosto em tela preta, assento preto em vinil e braços com regulagem de altura. Modelo versátil e confortável para o dia a dia. Garantia de 06 anos pelo fabricante.",
  imagem: `${import.meta.env.BASE_URL}fotos/8365.png`,
},

{
  id: 9336,
  nome: "Cadeira Executiva Reclinável",
  precoAntes: 1366.0,
  preco: 1093.0,
  desconto: 20,
  disponivel: true,
  descricao:
    "Cadeira executiva ergonômica com encosto em tela cinza, sistema de reclinação, regulagem de altura e braços ajustáveis. Mais conforto para longas horas de uso. Garantia de 06 anos pelo fabricante.",
  imagem: `${import.meta.env.BASE_URL}fotos/9336.png`,
},

{
  id: 83,
  nome: "Cadeira Executiva Reclinável",
  precoAntes: 1365.0,
  preco: 1093.0,
  desconto: 20,
  disponivel: true,
  descricao:
    "Cadeira executiva ergonômica com encosto em tela preta, sistema de reclinação, regulagem de altura e braços ajustáveis. Conforto premium para estudos e trabalho. Garantia de 06 anos pelo fabricante.",
  imagem: `${import.meta.env.BASE_URL}fotos/83.png`,
},

// SLOT VAZIO 1
{
  id: 0,
  nome: "",
  precoAntes: 0,
  preco: 0,
  desconto: 0,
  disponivel: false,
  descricao: "",
  imagem: "",
},

// SLOT VAZIO 2
{
  id: 0,
  nome: "",
  precoAntes: 0,
  preco: 0,
  desconto: 0,
  disponivel: false,
  descricao: "",
  imagem: "",
},

// SLOT VAZIO 3
{
  id: 0,
  nome: "",
  precoAntes: 0,
  preco: 0,
  desconto: 0,
  disponivel: false,
  descricao: "",
  imagem: "",
},

// SLOT VAZIO 4
{
  id: 0,
  nome: "",
  precoAntes: 0,
  preco: 0,
  desconto: 0,
  disponivel: false,
  descricao: "",
  imagem: "",
},

// SLOT VAZIO 5
{
  id: 0,
  nome: "",
  precoAntes: 0,
  preco: 0,
  desconto: 0,
  disponivel: false,
  descricao: "",
  imagem: "",
},

// SLOT VAZIO 6
{
  id: 0,
  nome: "",
  precoAntes: 0,
  preco: 0,
  desconto: 0,
  disponivel: false,
  descricao: "",
  imagem: "",
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
      texto += `- Ref: ${item.id} | ${item.nome} (${item.quantidade}x) - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
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