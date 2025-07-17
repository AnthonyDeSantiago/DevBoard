import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanList } from "./KanbanList";

interface sortableKanbanListProps {
  id: string;
  listTitle: string;
}

export const SortableKanbanList = (props: sortableKanbanListProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <KanbanList id={props.id} listTitle={props.listTitle} key={props.id} />
    </div>
  );
};
