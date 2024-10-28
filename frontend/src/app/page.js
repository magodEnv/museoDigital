import Image from "next/image";
import CategoriasHome from "./components/inHome/ClasiDestacada/CategoriasHome";
import VideosInicio from "./components/inHome/VideosInicio";
import ObjectCardGallery from "./components/inHome/ObjetosDestacados/ObjectCardGallery";

export default function Home() {
  return (
    <main className="flex flex-col">
      <VideosInicio />
      <div className="flex md:flex-row flex-col">
        <div className="w-full md:w-[40%] md:m-10 p-10 flex justify-center items-center text-center  text-3xl">
          <h1>
            Museo digital es una <b>colección virtual abierta</b> a todo
            público. Contiene el catalago de la coleccion permanente de{" "}
            <i>Museo Historico y Antropológico Mauricio Van de Maele.</i>
          </h1>
        </div>
        <ObjectCardGallery />
      </div>
    </main>
  );
}
