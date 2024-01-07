import { Item } from "./components/Item/Item";

export const ListOfItems = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center p-4 ">
        <div className="w-[80%] h-fit p-10 bg-black bg-opacity-15 rounded-xl grid md:grid-cols-2 gap-10 max-w-[1280px]">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
};
