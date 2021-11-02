import React from "react";
import classes from "./layout.module.css";

function Layout(props) {
  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <div className={classes.brand}>
          <img
            src="https://alan.app/brand_assets/logo-vertical/color/alan-logo-vertical-color.png"
            alt="alan-brand"
          />
        </div>
        <div>
          <div className={classes.container}>{props.children}</div>
        </div>
      </section>
    </main>
  );
}

export default Layout;
