import React from "react";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import ProfileImg from "../../Assets/profile.jpeg";
import localStyles from "./PeopleDrawer.css";
import ContactCard from "../ContactCard/ContactCard";
import John from "../../Assets/john.jpg";

import Lionel from "../../Assets/finch.jpg";
import Root from "../../Assets/root.jpg";
import Shaw from "../../Assets/shaw.jpeg";
import Elias from "../../Assets/elias.jpg";
import Joss from "../../Assets/joss.jpg";
function PeopleDrawer(props) {
  return (
    <div>
      <ContactCard
        profileImg={John}
        name="John Reese"
        message="Found our new number."
        time="10m"
      />
      <ContactCard
        profileImg={Lionel}
        name="Lionel Fusco"
        message="Seriously!"
        time="13m"
      />
      <ContactCard
        profileImg={Root}
        name="Root"
        message="I found the machine"
        time="2h"
      />
      <ContactCard
        profileImg={Shaw}
        name="Sameen Shaw"
        message="We got party busters"
        time="2h"
      />
      <ContactCard
        profileImg={Elias}
        name="Carl Elias"
        message="This is my city"
        time="6h"
      />

      <ContactCard
        profileImg={Joss}
        name="Joss Carter"
        message="I will find that mole"
        time="1d"
      />
    </div>
  );
}

export default PeopleDrawer;
