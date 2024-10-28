import { GoSearch } from "react-icons/go";

const SearchBox = () => {
  return (
    <div className="w-full">
      <form className="relative">
        <input
          type="text"
          placeholder="Buscar.."
          className="border-b-white w-full h-12 px-4 pr-10 text-2xl border-b bg-black bg-opacity-40 placeholder-white placeholder:italic text-white focus:bg-opacity-70 focus:outline-none"
        />
        <GoSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
          size={25}
        />
      </form>
    </div>
  );
};

export default SearchBox;
