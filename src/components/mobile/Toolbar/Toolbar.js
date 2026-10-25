import { Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

import classes from "./Toolbar.module.css";

function Toolbar(props) {
  return (
    <header className={classes.toolbar}>
      <nav className={classes.toolbar_navigation}>
        <div>
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className={classes.toolbar_logo}>
          <Link to="/">Shorti</Link>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
