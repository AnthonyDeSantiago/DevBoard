export type Card = {
  id: string;
  title: string;
  description?: string;
};

export type List = {
  id: string;
  title: string;
  cards: Card[];
};

export type Board = {
  id: string;
  title: string;
  lists: List[];
};
