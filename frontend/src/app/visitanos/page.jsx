import Image from "next/image";
import titlePic from "../../../public/museo/museo_estirado.jpg";
import principalPic from "../../../public/museo/familia_en_museo.jpg";

export default function Page() {
  return (
    <div className="">
      <div className="flex h-28 justify-center w-full bg-black">
        <Image
          src={titlePic}
          alt="Imagen de museo horizontal"
          className="object-cover object-center"
        />
      </div>

      <h1 className="text-center text-4xl p-5">
        Museo Histórico y Antropológico de Valdivia Mauricio Van de Maele
      </h1>
      <div className="flex">
        <div className="w-1/2 p-10 pt-5 text-justify">
          <p>
            El Museo Histórico y Antropológico Mauricio Van de Maele de la
            Universidad Austral de Chile, se alberga en la Casa Anwandter.
            Edifico construido en 1861 y declarado Monumento Histórico Nacional
            el año 1981, representa el apogeo de la familia industrial cervecera
            Anwandter y su nombre reconoce al destacado periodista belga que se
            dedicó al rescate y protección del patrimonio regional. Este museo
            busca representar distintos momentos de la historia regional y al
            mismo tiempo facilitar el acceso a la cultura e historia, de este
            modo, contribuyendo a la educación patrimonial de las comunidades y
            poner en valor la plurietnicidad regional.
          </p>
        </div>
        <div className="w-1/2 p-14 pt-5">
          <Image src={principalPic} />
        </div>
      </div>
    </div>
  );
}
