import { useState } from "react";
import AfterSubmit from "./component/AfterSubmit";
import RatePage from "./component/RatePage";

export default function App() {
  const [state, setState] = useState(0);
  const [page, setPage] = useState(false);

  function handleClick(e) {
    setState(e.target.value);
    return state;
  }

  function handleSubmit() {
    setPage(!page);
  }

  if (!page) {
    return <RatePage handleClick={handleClick} handleSubmit={handleSubmit} />;
  } else {
    return <AfterSubmit state={state} />;
  }
}
