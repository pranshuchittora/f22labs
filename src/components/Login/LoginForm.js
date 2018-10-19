import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import ProfileLogo from "../../Assets/profile.jpeg";
import FbLogo from '../../Assets/fb.png';
import TwitterLogo from '../../Assets/twitter.png'
import localStyles from "./LoginForm.css";

function SimpleCard(props) {
  const { classes } = props;
  return (
    <Card>
      <CardContent classes={localStyles.Card}>
        <div className={classNames(localStyles.ImgCont)}>
          <img
            alt="Adelle Charles"
            src={ProfileLogo}
            className={classNames(localStyles.profileImg)}
          />
        </div>
        <Typography
          variant="h6"
          className={classNames(localStyles.center)}
          gutterBottom
        >
          Admin Login
        </Typography>
        <Typography component="p" className={classNames(localStyles.center)}>
          Sign in to your account
        </Typography>

        <div className={classNames(localStyles.center)}>
          <TextField
            id="outlined-email-input"
            variant="outlined"
            label="Email"
            className={classNames(
              localStyles.InputField,
              localStyles.InputIncorrect
            )}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classNames(localStyles.InputField)}
            type="password"
            name="password"
            autoComplete="password"
            margin="normal"
            variant="outlined"
          />
        </div>
      </CardContent>
      <div className={classNames(localStyles.BtnCont)}>
        <FormControlLabel
          control={<Checkbox className={classNames(localStyles.Checkbox)} />}
          label="Remember me"
        />
        <Button variant="outlined" color="primary">
          Primary
        </Button>
      </div>

      <div className={classNames(localStyles.SocialCont)}>
        <Typography component="p" className={classNames(localStyles.center)}>
          Connect With
        </Typography>
        <img src={FbLogo}  className={classNames(localStyles.SocialIcon)} />
        <img src={TwitterLogo}  className={classNames(localStyles.SocialIcon)} />
      </div>
    </Card>
  );
}

export default SimpleCard;
