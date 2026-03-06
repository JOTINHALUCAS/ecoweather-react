import iconTemp from "../assets/icons/iconTemp.png";

function Header() {
  return (
    <header className="w-full">
      <div className="shadow border-0 rounded-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-2">
          <div className="flex items-center">
            <img src={iconTemp} className="w-8 h-8 " />
            <p className="font-bold text-xl">EcoWeather</p>
          </div>

          <p className="text-gray-500 text-sm ">Clima Inteligente</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
