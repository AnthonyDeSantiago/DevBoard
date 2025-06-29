// import { useState } from "react";
// import type { Card } from "../types/kanban";

interface cardProps {
  title: string;
}
export const KanbanCard = (props: cardProps) => {
  //   const [card, setCard] = useState<Card>({ id: props.id, title: props.title });

  return (
    <div className="card w-96 bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
      </div>
    </div>
  );
};
