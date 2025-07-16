import { AddListCard } from "./AddListCard";
interface buttonProps {
  buttonText: string;
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmitListTitle: (
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent
  ) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showAddListCard: boolean;
}
export const AddListButton = (props: buttonProps) => {
  return (
    <div>
      {props.showAddListCard ? (
        <AddListCard
          handleCancelClick={props.handleOnClick}
          handleSubmitListTitle={props.handleSubmitListTitle}
          handleInputChange={props.handleInputChange}
        />
      ) : (
        <button className="btn btn-primary" onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      )}
    </div>
  );
};
