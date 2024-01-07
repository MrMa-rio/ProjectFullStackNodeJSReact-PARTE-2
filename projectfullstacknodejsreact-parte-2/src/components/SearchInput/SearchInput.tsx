import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <>
      <div className="flex justify-center items-center w-fit h-12 py-4 px-6 gap-3 bg-black bg-opacity-5 rounded-md">
        <Search />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Busque um item"
          className="outline-none bg-black bg-opacity-0 w-64"
        />
      </div>
    </>
  );
};
