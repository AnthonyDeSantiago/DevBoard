import { useState } from "react";
import "./App.css";
import { DndContext } from "@dnd-kit/core";
import KanbanBoard from "./components/KanbanBoard";
import { Droppable } from "./components/Droppable";
import { Draggable } from "./components/Draggable";
import { Pages } from "./components/Pages";
import { Layout } from "./components/Page";

function App() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  function handleDragEnd(event) {
    const { over } = event;
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }

  return (
    <div className="flex w-full flex-col bg-gray-300">
      <h1 className="text-center text-2xl font-bold pt-6">DevBoard</h1>
      <DndContext onDragEnd={handleDragEnd}>
      <Pages layout={Layout.Horizontal} />
        {parent === null ? draggableMarkup : null}

        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : "Drop here"}
          </Droppable>
        ))}
        <KanbanBoard />
      </DndContext>
    </div>
  );
}

export default App;
