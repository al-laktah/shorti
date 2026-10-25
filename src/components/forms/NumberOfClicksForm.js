import { useRef } from "react";

import classes from "./Form.module.css";

function NumberOfClicks(props) {
  const shortiInputRef = useRef();

  function NumberofClicksHandler(event) {
    event.preventDefault();
    const enteredShorti = shortiInputRef.current.value;
    const numberOfClicksData = {
      shorti: enteredShorti,
    };
    props.onGetClicks(numberOfClicksData);
  }
  return (
    <form className={classes.form} onSubmit={NumberofClicksHandler}>
      <div className={classes.control}>
        <input
          type="text"
          required
          id="shorti-url"
          ref={shortiInputRef}
          placeholder={`${window.location.host}/abc123`}
        />
      </div>
      <div className={classes.actions}>
        <button>Track Clicks</button>
      </div>
    </form>
  );
}

export default NumberOfClicks;
