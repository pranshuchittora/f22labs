import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { mailFolderListItems, otherMailFolderListItems } from "./tileData";
import Grid from "@material-ui/core/Grid";
import PeopleDrawer from "../PeopleDrawer/PeopleDrawer";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import Messages from "../Messages/Messages";
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },

  drawerPaper: {
    position: "relative",
    background: "#000000",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container>
            <Grid
              item
              xs={6}
              md={2}
              style={{
                background: "#1b1b1b",
                height: "100vh",
                minheight: "100vh"
              }}
            >
              <MenuDrawer />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              style={{
                background: "#151515",
                height: "100vh",
                minheight: "100vh"
              }}
            >
              <PeopleDrawer />
            </Grid>

            <Grid
              item
              xs={12}
              md={7}
              style={{
                background: "#151515",
                height: "100vh",
                minheight: "100vh"
              }}
            >
              <Messages />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
