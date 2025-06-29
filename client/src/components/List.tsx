import { useState } from "react";

interface listProps {
  listTitle: string;
}

export const List = (props: listProps) => {
  const [showAddCardInput, setShowAddCardInput] = useState<boolean>(false);

  const handleClickAddNewCard = () => {
    setShowAddCardInput(!showAddCardInput);
  };

  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{props.listTitle}</h2>

        {showAddCardInput ? (
          <>
            <input type="text" placeholder="Enter a title" className="input" />
            <div className="justify-start card-actions">
              <button className="btn btn-primary">Add card</button>
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
