export interface ItemProps {
  idItem: number;
  nome: string;
  preco_unitario: string;
  imagem_64: string;
}
export interface ItemPropsCart extends ItemProps {
  qtdItem: number
}