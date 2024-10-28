import Image from "next/image";
import imagenSearch from "../../../public/bg-explorar.jpeg";
import Link from "next/link";
import CategoriasExplorar from "../components/Card/CategoriaCard";
import TopicosExplorar from "../components/Card/TopicosCard";
import { GoSearch } from "react-icons/go";
import NavBar from "../components/layout/NavBar";
import SearchBox from "../components/ui/SearchBox";

export default function Page() {
  return (
    <div className="relative overflow-auto">
      {/* Buscador */}
      <div className="h-[80vh]">
        <div className="items-center justify-center relative flex z-10 h-full">
          <div className="absolute inset-0">
            <Image src={imagenSearch} fill className="object-cover" />
          </div>
          <div className="relative z-10 w-3/4 md:w-1/2">
            <SearchBox />
          </div>
          <div className="absolute bottom-0 bg-black w-full bg-opacity-75 flex justify-end font-light text-lg">
            <Link
              href="/coleccion"
              className="text-white px-4 py-2 hover:text-orange-500 "
            >
              Ver modelos 3D
            </Link>
            <Link
              href="/coleccion"
              className="text-white px-4 py-2 hover:text-orange-500"
            >
              Ver todos los objetos
            </Link>
          </div>
        </div>
      </div>

      {/* Texto descripcitvo */}
      <div className="py-20 px-12 md:px-52 lg:px-80 text-center text-xl">
        <p>
          La base de datos de esta coleccion cuenta con mas de 500 objetos del
          Museo Maurico Van de Maele, cada objeto registrada cuenta con mas de
          10 imagenes. Contamos con mas de 70 objetos con modelos 3D, los cuales
          pueden ser descargados por todo publico. Ademas, cada objeto cuenta
          con la informacion actualizada dia a dia desde el museo.
        </p>
      </div>

      <div
        className="h-[50vh] bg-[url('/museo/familia_en_museo.jpg')] bg-cover bg-center bg-fixed"
        style={{ backgroundAttachment: "fixed" }}
      ></div>

      {/* Topicos principales */}
      <div className="px-10 pb-8 lg:px-40 flex flex-col z-20">
        <h2 className="text-4xl text-center font-light py-8">
          Topicos principales
        </h2>
        <TopicosExplorar />
      </div>

      {/* Colecciones Principales */}
      <div className="bg-cyan-700 text-amber-300 md:px-10 pb-8 z-20">
        <h1 className="text-4xl text-center font-extralight py-8">
          Explora la Coleccion
        </h1>
        <CategoriasExplorar />
      </div>
    </div>
  );
}
