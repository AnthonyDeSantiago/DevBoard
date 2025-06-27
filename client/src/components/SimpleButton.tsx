
interface buttonProps {
    buttonText: string;
}
export const SimpleButton = (props: buttonProps) => {
    return (
        <button className="btn btn-primary">{props.buttonText}</button>
    );
}