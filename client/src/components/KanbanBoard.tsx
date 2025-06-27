import { useState } from 'react';
import type { Board } from '../types/kanban';
import { SimpleButton } from './SimpleButton';
import { Column } from './Column';

const initialBoard: Board = {
  id: 'board-0',
  title: 'My DevBoard',
  columns: [
    {
      id: 'todo',
      title: 'To Do',
      cards: [{ id: 't1', title: 'Set up project' }]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      cards: []
    },
    {
      id: 'done',
      title: 'Done',
      cards: []
    },
  ]
};

export default function KanbanBoard() {
  // const [board] = useState<Board>(initialBoard);

  const [board, setBoard] = useState();



  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      <Column/>
      <SimpleButton
        buttonText='Add another list'
      />
      {board.columns.map((col) => (
        <div key={col.id} className="w-64 bg-gray-100 p-4 rounded shadow">
          <h2 className="font-semibold mb-2">{col.title}</h2>
          {col.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-2 mb-2 rounded shadow text-sm"
            >
              {card.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
