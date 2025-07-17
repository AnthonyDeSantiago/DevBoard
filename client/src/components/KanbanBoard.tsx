import { useState } from "react";
import type { Board } from "../types/kanban";
import { AddListButton } from "./AddListButton";
import { SortableKanbanList } from "./SortableKanbanList";
import { v4 as uuidv4 } from "uuid";

import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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
    if (newListTitle.length !== 0) {
      const newList = {
        id: uuidv4(),
        title: newListTitle,
        cards: [],
      };
      setBoard((prevBoard) => ({
        ...prevBoard,
        lists: [...prevBoard.lists, newList],
      }));
      setShowAddListCard(false);
      setNewListTitle("");
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = board.lists.findIndex((list) => list.id === active.id);
    const newIndex = board.lists.findIndex((list) => list.id === over.id);

    setBoard((prevBoard) => ({
      ...prevBoard,
      lists: arrayMove(prevBoard.lists, oldIndex, newIndex),
    }));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={board.lists.map((list) => list.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex gap-4 p-4 overflow-x-auto">
          {board.lists.map((list) => (
            <SortableKanbanList
              key={list.id}
              id={list.id}
              listTitle={list.title}
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
      </SortableContext>
    </DndContext>
  );
}
