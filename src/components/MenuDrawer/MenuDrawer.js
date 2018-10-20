import React from "react";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import MenuCard from "../MenuCard/MenuCard";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import localStyles from "./MenuDrawer.css";

function PeopleDrawer(props) {
  return (
    <div>
      <div style={{ background: "#2b2b2b", textAlign: "center", height: 100 }}>
        <Typography variant="h4" style={{ color: "#ddd", paddingTop: 30 }}>
          F22Labs
        </Typography>
      </div>
      <MenuCard name="#general" count="11" />

      <MenuCard name="#github-client" count="11" />
      <MenuCard name="#dev" count="11" />
      <MenuCard name="#randomzzz" count="11" />

      <MenuCard name="#intros" count="11" />

      <MenuCard name="#Marketing" count="11" />
    </div>
  );
}

export default PeopleDrawer;
