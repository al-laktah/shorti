import classes from "./Pages.module.css";
import UrlShortnerForm from "../components/forms/UrlShortnerForm";
import ShortUrlCard from "../components/cards/ShortUrlCard";
import InvalidUrlCard from "../components/cards/InavlidUrlCard";
import Card from "../components/cards/Card";
import axios from "axios";
import SERVER_ENDPOINT from "../api";
import { useState } from "react";

function UrlShortner() {
  const [data, setData] = useState("");
  const [cardIsShown, setCardIsShown] = useState(false);
  const [erorrIsShown, setErorrIsShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  function ShortenUrlHandler(urlShortnerData) {
    const payload = JSON.stringify(urlShortnerData);
    axios
      .post(SERVER_ENDPOINT() + "api/shortener/", payload)
      .then((response) => {
        DisplayCardHandler();
        setData(response.data);
      })
      .catch((e) => {
        // The proxy in front of shorti answers 403 when creating links isn't open to this visitor.
        DisplayErorrHandler(
          e.response && e.response.status === 403
            ? "Creating links is for members only. Shared links work for everyone."
            : undefined
        );
      });
  }
  function DisplayErorrHandler(message) {
    setErrorMessage(message);
    setCardIsShown(false);
    setErorrIsShown(true);
  }
  function DisplayCardHandler() {
    setErorrIsShown(false);
    setCardIsShown(true);
  }
  return (
      <div>
        <Card>
          <section>
            <h1
              className={classes.title}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              URL Shortener
            </h1>
            <UrlShortnerForm onShortenUrl={ShortenUrlHandler} />
          </section>
        </Card>
        {cardIsShown && <ShortUrlCard shorti={data} />}
        {erorrIsShown && <InvalidUrlCard message={errorMessage} />}
      </div>
  );
}

export default UrlShortner;
