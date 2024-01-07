import Image from "next/image";
import image from "../../../../../../temp/image.jpg";
export const Item = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 w-full h-44 hover:bg-opacity-25 hover:bg-black hover:scale-110 transition-all duration-150 rounded-xl">
        <div className="w-[40%] min-w-32 max-w-48 rounded-lg overflow-hidden">
          <Image src={image} alt="" />
        </div>
        <div>
          <p>Texto Grande XLLLLL</p>
          <p>Texto Medio Paaa</p>
          <p>Outro Texto</p>
          <p>aaa</p>
        </div>
      </div>
    </>
  );
};
