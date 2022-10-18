import Card from "./Card";
import star from "../images/icon-star.svg";

export default function RatePage({ handleClick, handleSubmit }) {
  return (
    <div className="bg-veryDarkBlue h-screen flex justify-center items-center">
      <Card itemsAlign={"items-start"}>
        <Card.Icon src={star} />
        <Card.Body>
          <Card.Title title={"How did we do?"} />
          <Card.Description>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Card.Description>
        </Card.Body>
        <Card.Option options={[1, 2, 3, 4, 5]} onClick={handleClick} />
        <Card.Button text={"Submit"} onClick={handleSubmit} />
      </Card>
    </div>
  );
}
