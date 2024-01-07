export const Pagination = () => {
  return (
    <>
      <div className="flex self-end px-32 ">
        <div className="flex items-center gap-1 w-fit px-10 h-10 bg-orange-300 bg-opacity-30">
          <button className="bg-orange-400 px-2 hover:bg-opacity-40 active:bg-opacity-60">
            Anterior
          </button>
          <button className="bg-orange-400 px-2 hover:bg-opacity-40 active:bg-opacity-60">
            1
          </button>
          <button className="bg-orange-400 px-2 hover:bg-opacity-40 active:bg-opacity-60">
            2
          </button>
          <button className="bg-orange-400 px-2 hover:bg-opacity-40 active:bg-opacity-60">
            3
          </button>
          <button className="bg-orange-400 px-2 hover:bg-opacity-40 active:bg-opacity-60">
            4
          </button>
          <button className="bg-orange-400 px-2 hover:bg-opacity-40 active:bg-opacity-60">
            Proximo
          </button>
        </div>
      </div>
    </>
  );
};
