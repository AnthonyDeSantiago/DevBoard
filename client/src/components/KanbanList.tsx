import { useState } from "react";
import type { Card, List } from "../types/kanban";
import { KanbanCard } from "./KanbanCard";
import { v4 as uuidv4 } from "uuid";

interface listProps {
  listTitle: string;
  id: string;
}

export const KanbanList = (props: listProps) => {
  const [list, setList] = useState<List>({
    id: props.id,
    title: props.listTitle,
    cards: [],
  });
  const [newCardTitle, setNewCardTitle] = useState<string>("");
  const [showAddCardInput, setShowAddCardInput] = useState<boolean>(false);

  const handleClickAddNewCard = () => {
    setShowAddCardInput(!showAddCardInput);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCardTitle(event.target.value);
  };

  const handleSumbitCardTitle = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    let newCardArray = [...list.cards];
    let newList = { ...list };
    const newCard: Card = {
      id: uuidv4(),
      title: newCardTitle,
    };
    newCardArray.push(newCard);
    newList.cards = newCardArray;
    setList(newList);
  };

  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{props.listTitle}</h2>
        <ul className="list bg-base-100 rounded-box shadow-md">
          {list?.cards.map((card) => (
            <KanbanCard title={card.title} key={card.id} />
          ))}
        </ul>
        {showAddCardInput ? (
          <>
            <input
              type="text"
              placeholder="Enter a title"
              className="input"
              onChange={handleInputChange}
            />
            <div className="justify-start card-actions">
              <button
                className="btn btn-primary"
                onClick={handleSumbitCardTitle}
              >
                Add card
              </button>
              <button
                className="btn btn-active"
                onClick={handleClickAddNewCard}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div className="justify-start card-actions">
            <button className="btn btn-primary" onClick={handleClickAddNewCard}>
              Add a card
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
