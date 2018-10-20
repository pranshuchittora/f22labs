import React from "react";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import ProfileImg from "../../Assets/profile.jpeg";
import localStyles from "./PeopleDrawer.css";

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import TextField from '@material-ui/core/TextField';
import ContactCard from "../ContactCard/ContactCard";
import John from "../../Assets/john.jpg";
import Lionel from "../../Assets/finch.jpg";
import Root from "../../Assets/root.jpg";
import Shaw from "../../Assets/shaw.jpeg";
import Elias from "../../Assets/elias.jpg";
import Joss from "../../Assets/joss.jpg";
import SearchIcon from '../../Assets/search.png'

function PeopleDrawer(props) {
  return (
    <div>
      <div style={{background:"#222",textAlign:"center",height:100}}>
      <TextField
        style={{height:40,border:"2px solid #555",marginTop:30,borderRadius:"20px"}}
        id="input-with-icon-textfield"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            <img src={SearchIcon} style={{width:30,height:30}} />
            </InputAdornment>
          ),
        }}
      />
      </div>
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
