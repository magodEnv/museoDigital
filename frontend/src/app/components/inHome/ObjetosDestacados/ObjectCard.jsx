import Image from "next/image";

const ObjectCard = () => {
  return (
    <div className="bg-violet-500 rounded-lg h-1/2 w-60 relative overflow-hidden shrink-0">
      <Image src="/objetos/trice/trice1.jpg" fill className="object-cover" />
    </div>
  );
};

export default ObjectCard;
