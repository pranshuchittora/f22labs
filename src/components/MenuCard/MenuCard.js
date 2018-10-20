import React from "react";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import localStyles from "./MenuCard.css";

function MenuCard(props) {

  return (
    <Grid
      container
      className={classNames(localStyles.containerCard)}
      spacing={12}
    >
    <Grid item xs={1}/>
      <Grid item xs={8}>
        <h4 className={classNames(localStyles.name)}>{props.name}</h4>
      </Grid>
      <Grid item xs={3}>
        <h5 className={classNames(localStyles.name,localStyles.center)}>{props.count}</h5>
      </Grid>
    </Grid>
  );
}

export default MenuCard;
