import BotonTarjeta from "../components/Card/DescriptionCard";
import Galeria from "../components/GaleriaImagenes";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Galeria de imagenes */}
      <Galeria />

      {/* Main */}
      <div className="bg-white text-black flex flex-col lg:flex-row w-full relative">
        {/* Boton 3D */}
        <div className="absolute right-10 top-5">
          <Link href="/objeto3D">
            <div className="bg-green-500 rounded-lg px-3 py-2 border-2 border-green-700">
              <p className="text-white">Ver modelo 3D</p>
            </div>
          </Link>
        </div>

        {/* Informacion del objeto */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl">Triceraptor</h1>
          <h2 className="text-xs italic">Barney, Dinosaurio, Dumbo</h2>
          <p className="text-justify mt-8">
            El esqueleto de la cabeza del triceratops, un icónico dinosaurio
            herbívoro del Cretácico, es una estructura robusta y distintiva. Su
            cráneo presenta tres prominentes cuernos, dos ubicados sobre los
            ojos y uno en la nariz, que le conferían un aspecto imponente y le
            ayudaban a defenderse de los depredadores. Los cuernos, hechos de
            hueso sólido, están soportados por una estructura ósea ancha y en
            forma de &quot;escudo&quot; que se extiende desde la parte posterior
            del cráneo hacia los lados, conocida como la gola. Esta gola ósea
            está formada por placas óseas fusionadas que proporcionaban una
            protección adicional para el cuello y los órganos vitales. La
            mandíbula del triceratops es fuerte y robusta, equipada con dientes
            adaptados para cortar plantas. El esqueleto de la cabeza también
            incluye una serie de cavidades y suturas óseas que indican una
            estructura compleja y especializada, adaptada a su dieta herbívora y
            a sus necesidades de defensa.
          </p>
        </div>

        {/*Tarjetas de infromacion */}
        <div className="flex justify-center items-center py-10 px-10 lg:h-screen w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <BotonTarjeta title="Origen" />
            <BotonTarjeta title="Dimensiones" />
            <BotonTarjeta title="Categoria" />
            <BotonTarjeta title="Adquisicion" />
          </div>
        </div>
      </div>
    </div>
  );
}
