import { useRef } from "react";

import classes from "./Form.module.css";
import Card from "../cards/Card";

function ReportUrlForm() {
  const maliciousUrlInputRef = useRef();
  const commentInputRef = useRef();

  function ReportUrlFormHandler(event) {
    event.preventDefault();
    const enteredMaliciousUrl = maliciousUrlInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    const contactData = {
      name: enteredMaliciousUrl,
      email: enteredComment,
    };

    console.log(contactData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={ReportUrlFormHandler}>
        <div className={classes.control}>
          <label htmlFor="maliciousUrl">Invalid or malicious URL</label>
          <input
            type="text"
            required
            id="maliciousUrl"
            ref={maliciousUrlInputRef}
            placeholder={`${window.location.host}/abc123`}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="comment">Comment</label>
          <textarea
            className={classes.textarea}
            required
            id="comment"
            ref={commentInputRef}
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
}

export default ReportUrlForm;
