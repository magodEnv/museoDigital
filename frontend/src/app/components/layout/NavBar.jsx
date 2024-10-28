"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <div
      className={`absolute bg-gradient-to-t from-transparent text-white z-20 flex h-20 justify-between w-full md:px-20 pt-2 ${
        pathname === "/coleccion" ? "to-black/60" : "to-black/90"
      }`}
    >
      <div className="p-3 inset-0 z-10">
        <div className="w-56">
          <Link
            href="/"
            className="font-bold text-2xl hover:font-extrabold duration-100 text-center"
          >
            <p>MUSEO DIGITAL</p>
          </Link>
        </div>
      </div>
      <div className="md:hidden pt-4 px-5">
        <button onClick={toggleMenu} className="text-white focus:outline-none ">
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "absolute w-full px-7" : "hidden"
        } md:flex flex-col md:flex-row p-3 text-lg z-10 top-16`}
      >
        <BotonLink text="Explorar" handleClick={toggleMenu} />
        <BotonLink text="Visitanos" handleClick={toggleMenu} />
        <BotonLink text="Nosotros" handleClick={toggleMenu} />
      </div>
    </div>
  );
};

const BotonLink = ({ text, handleClick }) => {
  return (
    <div className="text-center w-full md:w-32 duration-300">
      <Link
        href={`/${text.toLowerCase()}`}
        className="font-semibold hover:font-bold flex w-full md:w-32 justify-center py-3 md:py-0 md:p-7 bg-gray-900 md:bg-opacity-0 border-b-2 border-gray-800 md:border-b-0"
        onClick={handleClick}
      >
        {text}
      </Link>
    </div>
  );
};

export default NavBar;
