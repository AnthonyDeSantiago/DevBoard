import { useState } from "react";
import type { Board } from "../types/kanban";
import { AddListButton } from "./AddListButton";
import { KanbanList } from "./KanbanList";
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

  const handleClickAddAnotherList = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setShowAddListCard(!showAddListCard);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewListTitle(event.target.value);
  };

  const handleSubmitListTitle = (
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent
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
    setShowAddListCard(false);
  };

  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {board.lists.map((list) => (
        <KanbanList listTitle={list.title} key={list.id} id={list.id} />
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
