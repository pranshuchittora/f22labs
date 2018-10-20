import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import WhatsappIcon from "../../Assets/SocialIcons/whatsapp.png";
import GmailIcon from "../../Assets/SocialIcons/gmail.png";
import SkypeIcon from "../../Assets/SocialIcons/skype.png";
import SlackIcon from "../../Assets/SocialIcons/slack.png";
import TelegramIcon from "../../Assets/SocialIcons/telegram.png";
import AddIcon from "../../Assets/SocialIcons/add.png";
import localStyles from "./tileData.css";
export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <img src={WhatsappIcon} className={localStyles.SocialImg} />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <img src={GmailIcon} className={localStyles.SocialImg} />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <img src={SkypeIcon} className={localStyles.SocialImg} />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <img src={SlackIcon} className={localStyles.SocialImg} />
      </ListItemIcon>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <img src={TelegramIcon} className={localStyles.SocialImg} />
      </ListItemIcon>
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <img src={AddIcon} className={localStyles.SocialImg} />
      </ListItemIcon>
    </ListItem>
   
  </div>
);
