import Header from "./components/Header";
import InputCdd from "./components/InputCdd";
import wordloc from "./assets/icons/wordloc.jpg";
function App() {
  return (
    <div>
      <Header />
      <InputCdd />

      <div className="w-full">
        <div className="max-w-md mx-auto w-max-2xl  flex flex-col items-center justify-center p-8 ">
          <img src={wordloc} className="w-40 rounded-4xl p-4" />
          <p className="font font-bold italic">
            Descubra o clima da sua cidade
          </p>
          <p className="text-sm text-gray-500">
            Busque por qualquer cidade do mundo e receba informações climaticas
            em tempo real, junto com dicas de sustentabilidade geradas por IA
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
