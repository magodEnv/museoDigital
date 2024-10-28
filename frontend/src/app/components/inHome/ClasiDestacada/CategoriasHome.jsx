import Image from "next/image";

const CategoriasHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <TarjetaCategoria src="/categorias/colecction.jpg" title="Mobiliario" />
      <TarjetaCategoria src="/categorias/colection2.jpg" title="Contenedores" />
      <TarjetaCategoria src="/categorias/colection3.jpg" title="Imagenes" />
      <TarjetaCategoria
        src="/categorias/colection4.jpeg"
        title="Herramientas"
      />
      <TarjetaCategoria src="/categorias/colection4.jpeg" title="Vestuario" />
      <TarjetaCategoria src="/categorias/colection4.jpeg" title="Musica" />
    </div>
  );
};

const TarjetaCategoria = ({ src, title }) => {
  return (
    <div className="w-full h-96 relative overflow-hidden group">
      <Image
        src={src}
        layout="fill"
        className="object-cover transition-transform duration-900 group-hover:scale-110 "
        alt="Categoría"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h3 className="text-white text-3xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default CategoriasHome;
