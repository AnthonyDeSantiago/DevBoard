// import { useState } from "react";
// import type { Card } from "../types/kanban";

interface cardProps {
  title: string;
}
export const KanbanCard = (props: cardProps) => {
  //   const [card, setCard] = useState<Card>({ id: props.id, title: props.title });
  // w-full truncate bg-neutral text-neutral-content rounded-md p-2 mb-2

  return (
    <div className="card w-full bg-base-100 card-xs shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
      </div>
    </div>
  );
};
