import { useState } from 'react';
import type { Board } from '../types/kanban';

const initialBoard: Board = {
  id: 'board-1',
  title: 'My DevBoard',
  columns: [
    {
      id: 'todo',
      title: 'To Do',
      tasks: [{ id: 't1', title: 'Set up project' }]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: []
    },
    {
      id: 'done',
      title: 'Done',
      tasks: []
    },
  ]
};

export default function KanbanBoard() {
  const [board] = useState<Board>(initialBoard);

  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {board.columns.map((col) => (
        <div key={col.id} className="w-64 bg-gray-100 p-4 rounded shadow">
          <h2 className="font-semibold mb-2">{col.title}</h2>
          {col.tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-2 mb-2 rounded shadow text-sm"
            >
              {task.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
