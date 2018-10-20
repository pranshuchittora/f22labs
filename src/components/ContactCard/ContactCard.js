import React from "react";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProfileImg from "../../Assets/profile.jpeg";
import localStyles from "./ContactCard.css";

function ContactCard(props) {

  return (
    <Grid
      container
      className={classNames(localStyles.containerCard)}
      spacing={12}
    >
      <Grid item xs={3}>
        <img className={classNames(localStyles.profileImg)} src={props.profileImg} />
      </Grid>
      <Grid item xs={7}>
        <h4 className={classNames(localStyles.name)}>{props.name}</h4>
        <h5 className={classNames(localStyles.message)}>{props.message}</h5>
      </Grid>
      <Grid item xs={2}>
        <h5 className={classNames(localStyles.name,localStyles.center)}>...</h5>
        <h6 className={classNames(localStyles.message,localStyles.center)}>{props.time}</h6>
      </Grid>
    </Grid>
  );
}

export default ContactCard;
