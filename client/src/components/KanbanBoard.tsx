import { useState } from "react";
import type { Board, Card } from "../types/kanban";
import { AddListButton } from "./AddListButton";
import { List } from "./List";
import { v4 as uuidv4 } from "uuid";

const initialBoard: Board = {
  id: "board-0",
  title: "My DevBoard",
  lists: [],
};

export default function KanbanBoard() {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [showAddListCard, setShowAddListCard] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");

  const [showAddCardInput, setShowAddCardInput] = useState<boolean>(false);
  const [newCardObject, setNewCardObject] = useState<Card>();

  //const [board, setBoard] = useState();

  const handleClickAddAnotherList = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setShowAddListCard(!showAddListCard);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewListTitle(event.target.value);
  };

  const handleSubmitListTitle = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log("Clicked Submit: ", newListTitle);
    let newListArray = [...board.lists];
    let newBoard = { ...board };
    const newList = {
      id: uuidv4(),
      title: newListTitle,
      cards: [],
    };
    newListArray.push(newList);
    newBoard.lists = newListArray;
    setBoard(newBoard);
  };

  const handleClickAddNewCard = () => {
    setShowAddCardInput(!showAddCardInput);
  };

  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {board.lists.map((list) => (
        <List
          listTitle={list.title}
          handleClickedAddNewCard={handleClickAddNewCard}
          showAddCardInput={showAddCardInput}
          key={list.id}
        />
      ))}
      <AddListButton
        buttonText="Add another list"
        handleOnClick={handleClickAddAnotherList}
        showAddListCard={showAddListCard}
        handleInputChange={handleInputChange}
        handleSubmitListTitle={handleSubmitListTitle}
      />
    </div>
  );
}
