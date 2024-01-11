import { useItemContext } from "@/hooks/useItemContext";
import { XCircle } from "lucide-react";

interface ModalItemProps {
  setIsShow: (value: boolean) => void;
}

export const ModalItem = ({ setIsShow }: ModalItemProps) => {
  const { itemID } = useItemContext();
  return (
    <>
      <div className="flex justify-center items-center fixed top-20 left-0 w-screen h-screen bg-black bg-opacity-70">
        <div className="flex w-[60%] h-fit bg-white p-2">
          <div className="flex flex-col w-full bg-orange-300 ">
            <button onClick={() => setIsShow(false)} className="flex self-end ">
              <XCircle className="w-8 h-8" />
            </button>
            <div className="flex gap-6 p-4 justify-center items-center">
              <img
                loading="lazy"
                width={100}
                height={100}
                src={`https://source.unsplash.com/300x200/?food/${itemID}`}
                title={"teste"}
                alt=""
                className="bg-cover w-[60%] h-[100%]"
              />
              <div className="w-full">
                <p>{}</p>
                <p>{}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
