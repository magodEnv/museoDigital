const VideosInicio = () => {
  return (
    <div className="h-dvh w-full text-white relative">
      <div className="w-full h-full bg-black flex">
        <video className="object-cover w-full" autoPlay muted loop>
          <source src="/museo/museo_exterior.webm" type="video/webm" />
          <source src="/museo/museo_exterior.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-10 m-5 left-0 right-0">
          <div className="text-center">
            <p className="font-light">Museo</p>
            <h1 className="text-3xl font-medium">
              Histórico y Antropológico Mauricio Van de Maele
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosInicio;
