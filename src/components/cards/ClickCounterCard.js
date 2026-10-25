import Card from "./Card";
import classes from "./Cards.module.css";

function ClickCounterCard(props) {
  let times = (props.clicks === 1) ? "Time" : "Times"
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
          Your Shorti URL Was Clicked:
        </h1>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            {props.clicks} {times}
        </h1>
      </section>
    </Card>
  );
}

export default ClickCounterCard;
