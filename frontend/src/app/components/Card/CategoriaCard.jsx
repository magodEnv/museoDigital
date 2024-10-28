import Image from "next/image";

const CategoriasExplorar = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-9">
        <TarjetaCategoria src="/categorias/colecction.jpg" title="Mobiliario" />
        <TarjetaCategoria
          src="/categorias/colection2.jpg"
          title="Contenedores"
        />
        <TarjetaCategoria src="/categorias/colection3.jpg" title="Imagenes" />
        <TarjetaCategoria
          src="/categorias/colection4.jpeg"
          title="Herramientas"
        />
        <TarjetaCategoria src="/categorias/colection4.jpeg" title="Vestuario" />
        <TarjetaCategoria src="/categorias/colection4.jpeg" title="Musica" />
        <TarjetaCategoria src="/categorias/colection4.jpeg" title="Musica" />
        <TarjetaCategoria src="/categorias/colection4.jpeg" title="Musica" />
        <TarjetaCategoria src="/categorias/colection4.jpeg" title="Musica" />
        <TarjetaCategoria src="/categorias/colection4.jpeg" title="Musica" />
        <TarjetaCategoria src="/categorias/colection4.jpeg" title="Musica" />
        <TarjetaCategoria src="/categorias/colection4.jpeg" title="Musica" />
        <TarjetaCategoria src="/categorias/colection4.jpeg" title="Musica" />
      </div>
    </div>
  );
};

const TarjetaCategoria = ({ src, title }) => {
  return (
    <div className="w-52 h-52 relative overflow-hidden group">
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

export default CategoriasExplorar;
