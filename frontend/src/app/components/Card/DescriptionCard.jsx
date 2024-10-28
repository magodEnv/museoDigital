"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const DescriptionCard = ({ title }) => {
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

  const manejarClick = () => {
    setMostrarTarjeta(!mostrarTarjeta);
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out w-full ${
        mostrarTarjeta ? "h-40" : "h-12"
      } bg-slate-300 rounded-md shadow-md overflow-hidden`}
    >
      {/* Titulo visible de Tarjeta */}
      <div
        onClick={manejarClick}
        className="text-black px-6 py-3 cursor-pointer flex justify-between items-center"
      >
        <span>{title}</span>
        <IoIosArrowBack
          className={`duration-300 ${mostrarTarjeta && "-rotate-90"}`}
        />
      </div>

      {/* Contenido oculto de Tarjeta */}
      {mostrarTarjeta && (
        <div className="p-4 bg-gray-200 h-full">
          <p>Contenido adicional aquí.</p>
        </div>
      )}
    </div>
  );
};

export default DescriptionCard;
