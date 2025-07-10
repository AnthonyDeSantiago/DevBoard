interface addListCardProps {
  handleCancelClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmitListTitle: (
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent
  ) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const AddListCard = (props: addListCardProps) => {
  const handleOnEnterPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.handleSubmitListTitle(event);
    }
  };
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <input
          type="text"
          placeholder="Enter list name..."
          className="input"
          onChange={props.handleInputChange}
          onKeyDown={handleOnEnterPress}
        />
        <div className="justify-start card-actions">
          <button
            className="btn btn-primary"
            onClick={props.handleSubmitListTitle}
          >
            Add list
          </button>
          <button className="btn btn-active" onClick={props.handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
