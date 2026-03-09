import Header from "./components/Header";
import InputCdd from "./components/InputCdd";
import wordloc from "./assets/icons/wordloc.jpg";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  async function buscarClima(cidade) {
    const chave = "b9690d04d2af769397d10716a3aba6e7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chave}&lang=pt_br`;

    const resposta = await fetch(url);

    const dados = await resposta.json();

    dados.cod == 200 ? setWeather(dados) : alert("Cidade não encontrada");
  }

  return (
    <div className="min-h-screen">
      <Header />
      <InputCdd aoBuscar={buscarClima} />

      {!weather ? (
        <div className="w-full">
          <div className="max-w-md mx-auto flex flex-col items-center justify-center p-8  text-center">
            <img src={wordloc} className="w-40 rounded-4xl p-4" />
            <p className="font font-bold italic">
              Descubra o clima da sua cidade
            </p>
            <p className="text-sm text-gray-500">
              Busque por qualquer cidade do mundo e receba informações
              climaticas em tempo real, junto com dicas de sustentabilidade
              geradas por IA
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto p-8 text-center">
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p className="text-5xl">{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].description}</p>
          <button onClick={() => setWeather(null)} className="mt-4 underline">
            Fazer nova busca
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
