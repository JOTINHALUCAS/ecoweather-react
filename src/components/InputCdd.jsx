import { Search } from "lucide-react";

function InputCdd() {
  return (
    <div className="w-full">
      <div className="flex w-full max-w-md mx-auto w-max-4xl h-11 shadow focus:shadow-emerald-400 pointer rounded-md items-center justify-between mt-4 p-4 border-0">
        <Search className="w-4 h-4 absolute" />
        <input
          type="text"
          placeholder="Digite uma cidade"
          className="p-6 b rounded-sm focus:right-2 focus:outline-none focus:ring-green-200 text-sm"
        />
        <div className="bg-emerald-300 rounded-2xl w-20 h-8 flex items-center justify-center shadow">
          <button className=" text-sm text-amber-50 text-center h-6 ">
            Buscar
          </button>
        </div>
      </div>
      <div>
        <p>Descubra o clima da sua cidade</p>
        <p>
          Busque por qualquer cidade do mundo e receba informações climaticas em
          tempo real, junto com dicas de sustentabilidade geredas por IA
        </p>
      </div>
    </div>
  );
}

export default InputCdd;
