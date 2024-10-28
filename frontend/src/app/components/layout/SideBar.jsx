"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const ItemsMenu = [
  { title: "Colecccion" },
  { title: "Clasificacion" },
  { title: "Material" },
  { title: "Siglo" },
  { title: "Estilo de fabricacion" },
  { title: "Ubicacion" },
];

const SideBar = ({ open }) => {
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggleSubMenu = (menuName) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  return (
    <div
      className={`bg-gray-300 text-black space-y-4 h-auto transition-all duration-300 ease-in-out ${
        open ? "w-full md:w-80 p-4" : "w-0 p-0"
      } overflow-hidden`}
    >
      {ItemsMenu.map((menu, index) => (
        <div key={index}>
          <Categoria
            text={menu.title}
            isOpen={subMenuOpen[menu.title]}
            toggleMenu={() => toggleSubMenu(menu.title)}
          />
        </div>
      ))}
    </div>
  );
};

const Categoria = ({ text, isOpen, toggleMenu }) => {
  return (
    <div>
      <div
        className="flex py-1 px-2 rounded hover:bg-slate-400 justify-between items-center border-b border-slate-400"
        onClick={toggleMenu}
      >
        <p>{text}</p>
        <IoIosArrowBack className={`duration-300 ${isOpen && "-rotate-90"}`} />
      </div>
      {isOpen && (
        <div className="pl-4 pt-3">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <p>Submenú 1</p>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <p>Submenú 2</p>
          </label>
        </div>
      )}
    </div>
  );
};

export default SideBar;
