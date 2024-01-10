export default function page(){
    return(
        <>
            <div className="flex justify-center items-center px-10 pt-28" >
                <div className="flex items-center w-[80%] h-[70vh] border-2 border-gray-200 rounded-2xl"> {/* apos preencher colocar o h-fit */}
                    <div className="w-full h-full">

                    </div>
                    <div className="w-0.5 h-[80%] bg-gray-400 rounded-xl"></div>
                    <div className="flex flex-col w-1/2 h-full pt-8 p-4">
                        <h2 className="text-xl">SUBTOTAL</h2>
                        {/* <div className="w-full h-0.5 self-center bg-black rounded-xl"></div> */}

                    </div>
                </div>
            </div>
        </>
    )
}