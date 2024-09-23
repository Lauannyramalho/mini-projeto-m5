import './App.css';
import { useState } from 'react';

const Grafico1 = () => (
  <div>
    <h3>Gráfico 1: Economia de Água</h3>
    <p>Descrição do gráfico: Este gráfico mostra a economia de água ao longo do tempo.</p>
  </div>
);

const Grafico2 = () => (
  <div>
    <h3>Gráfico 2: Economia de Energia</h3>
    <p>Descrição do gráfico: Este gráfico mostra a economia de energia ao longo do tempo.</p>
  </div>
);

const Grafico3 = () => (
  <div>
    <h3>Gráfico 3: Economia de Água</h3>
    <p>Descrição do gráfico: Este gráfico mostra a economia de água ao longo do tempo.</p>
  </div>
);

const Grafico4 = () => (
  <div>
    <h3>Gráfico 4: Economia de Energia</h3>
    <p>Descrição do gráfico:  Este gráfico mostra a economia de energia ao longo do tempo.</p>
  </div>
);

export default function App() {
  const [idade, setIdade] = useState('');
  const [imagemAtiva, setImagemAtiva] = useState('grafico1');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idade < 18) {
      alert('Você não pode verificar a economia de água e de energia porque é menor de idade.');
    } else {
      alert('Você pode visualizar as informações abaixo.');
    }
  };

  const toggleImagem = () => {
    setImagemAtiva((prev) => {
      switch (prev) {
        case 'grafico1':
          return 'grafico2';
        case 'grafico2':
          return 'grafico3';
        case 'grafico3':
          return 'grafico4';
        case 'grafico4':
          return 'imagem_agua_energia';
        default:
          return 'grafico1';
      }
    });
  };

  return (
    <div className="App">
      <header>
        <p>Login</p>
        <h1>Water and Light</h1>
      </header>
      <main className="main">
        <div className="center">
          <div className="menu">
            <div className="item_menu">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" required />
                <input type="tel" placeholder="Telefone" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Endereço" required />
                <input 
                  type="number" 
                  placeholder="Idade" 
                  value={idade} 
                  onChange={(e) => setIdade(e.target.value)} 
                  required 
                />
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
          <div className="informacoes">
            <h2>Informações de Economia</h2>
            {imagemAtiva === 'grafico1' && <Grafico1 />}
            {imagemAtiva === 'grafico2' && <Grafico2 />}
            {imagemAtiva === 'grafico3' && <Grafico3 />}
            {imagemAtiva === 'grafico4' && <Grafico4 />}
            {imagemAtiva === 'imagem_agua_energia' && <ImagemAguaEnergia />}
            <button onClick={toggleImagem}>Mudar Informação</button>
          </div>
        </div>
      </main>
    </div>
  );
}
