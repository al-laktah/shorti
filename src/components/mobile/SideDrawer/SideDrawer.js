import { Link } from "react-router-dom";

import classes from "./SideDrawer.module.css";

function SideDrawer(props) {
  return (
    <nav className={classes.side_drawer + ' ' + (props.show && classes.open)}>
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
        <li>
          <Link to="/Contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideDrawer;
