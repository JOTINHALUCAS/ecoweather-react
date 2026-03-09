import { Search } from "lucide-react";
import { useState } from "react";

function InputCdd({ aoBuscar }) {
  const [cidade, setCidade] = useState("");

  function handleBuscar() {
    if (cidade.trim() !== "") {
      aoBuscar(cidade);
    }
  }

  return (
    <div className="w-full">
      <div className="flex w-full max-w-md mx-auto w-max-4xl h-11 shadow focus:shadow-emerald-400 pointer rounded-md items-center justify-between mt-4 p-4 border-0">
        <Search className="w-4 h-4 absolute" />
        <input
          type="text"
          placeholder="Digite uma cidade"
          className="p-6 b rounded-sm focus:right-2 focus:outline-none focus:ring-green-200 text-sm"
          onChange={(e) => setCidade(e.target.value)}
        />

        <div className="bg-emerald-300 rounded-2xl w-20 h-8 flex items-center justify-center shadow ">
          <button
            className=" text-sm text-amber-50 text-center w-20 h-8 rounded-2xl focus:ring-2 focus:ring-emerald-500 shadow"
            value={cidade}
            onClick={handleBuscar}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputCdd;
