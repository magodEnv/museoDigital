import Image from "next/image";

const TopicosExplorar = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
      <TopicosCard src="/categorias/3D.jpg" title="Coleccion 3D" />
      <TopicosCard src="/categorias/antropologia.jpg" title="Antropologia" />
      <TopicosCard src="/categorias/arte.avif" title="Arte" />
      <TopicosCard src="/categorias/historia.webp" title="Historia" />
    </div>
  );
};

const TopicosCard = ({ src, title }) => {
  return (
    <div className="w-full h-96 relative overflow-hidden group rounded-md">
      <Image
        src={src}
        layout="fill"
        className="object-cover transition-transform duration-900 group-hover:scale-110 "
        alt={title}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h3 className="text-white text-4xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default TopicosExplorar;
