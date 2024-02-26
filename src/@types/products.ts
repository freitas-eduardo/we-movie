export type Products = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export type HomeSharedActions = {
  handleAddProducts: (id: number) => void;
};
