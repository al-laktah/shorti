import Card from "./Card";
import classes from "./Cards.module.css";

function ShortUrlCard(props) {
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
          Your Shorti URL :
        </h1>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.shorti}
        </h1>
      </section>
    </Card>
  );
}

export default ShortUrlCard;
