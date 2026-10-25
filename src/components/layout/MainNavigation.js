import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Shorti</Link>
      </div>
      <nav className={classes.link}>
        <ul>
          <li>
            <Link to="/">URL Shortener</Link>
          </li>
          <li>
            <Link to="/ClickTracker">URL Click Tracker</Link>
          </li>
          <li>
            <Link to="/ReportUrl">Report Malicious URL</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
