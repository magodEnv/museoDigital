import Image from "next/image";
import logoUach from "../../../../public/logo-uach.jpg";
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-zinc-800 flex flex-col md:flex-row items-center justify-between p-5 w-full">
      <div className="flex items-center">
        <div className="overflow-hidden rounded w-24 h-24">
          <Image
            src={logoUach}
            width={96}
            height={96}
            className="object-cover"
            alt="Logo Universidad"
          />
        </div>
      </div>
      <div className="text-stone-200 flex flex-col items-center md:items-end mt-5 md:mt-0">
        <h2>¡Síguenos!</h2>
        <div className="pt-2 flex space-x-4">
          <FaInstagram size={25} />
          <FaFacebookSquare size={25} />
          <FaXTwitter size={25} />
          <FaYoutube size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
