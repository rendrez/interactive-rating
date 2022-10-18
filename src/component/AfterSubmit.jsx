import Card from "./Card";
import thank from "../images/illustration-thank-you.svg";

export default function AfterSubmit({ state }) {
  return (
    <div className="bg-veryDarkBlue h-screen flex justify-center items-center">
      <Card itemsAlign={"items-center"}>
        <img src={thank} alt="thank-you" />
        <div className="text-orange bg-mediumGrey rounded-full text-sm px-6 py-1">
          You selected {state} out of 5
        </div>
        <Card.Body className={"items-center"}>
          <Card.Title title={"Thank You!"} />
          <Card.Description className={"text-center"}>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </Card.Description>
        </Card.Body>
      </Card>
    </div>
  );
}
