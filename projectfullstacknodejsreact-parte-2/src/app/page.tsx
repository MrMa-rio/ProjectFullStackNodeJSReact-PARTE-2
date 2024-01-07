import { ListOfItems, Pagination, SearchInput } from "@/components";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center items-center w-full h-32">
        <div className="w-full h-16 p-10">
          <SearchInput />
        </div>
      </div>
      <Pagination />
      <ListOfItems />
      <div></div>
    </div>
  );
}
