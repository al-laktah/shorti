import Card from "./Card";
import classes from "./Cards.module.css";

function InvalidUrlCard({ message = "The URL is not valid" }) {
  return (
    <Card>
      <section className={classes.Card}>
        <h1
          className={classes.title}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {message}
        </h1>
      </section>
    </Card>
  );
}

export default InvalidUrlCard;
