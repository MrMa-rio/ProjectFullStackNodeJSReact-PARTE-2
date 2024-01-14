
interface InputProps {
    setDescription: (value: string) => void
}

export const DescriptionText = ({setDescription}:InputProps) => {
  return (
    <div className="flex justify-center p-1 w-full h-fit bg-black bg-opacity-10  rounded-lg">
      <textarea
        name="descricao"
        id="descricao"
        placeholder="Descrição do Pedido:"
        onChange={(e) => setDescription(e.currentTarget.value)}
        className="outline-none bg-black bg-opacity-0 w-full min-h-20 max-h-60 h-fit whitespace-pre-wrap resize-y    "
        title="Descrição do Pedido"
      />
    </div>
  );
};
