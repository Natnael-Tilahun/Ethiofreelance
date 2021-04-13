import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
      <div className="sidebar">
      <SidebarRow src="https://source.unsplash.com/user/erondu/1600x900" title="abenezer kifle"/>
      <SidebarRow 
      Icon={LocalHospitalIcon}
      title="COVID-19 INFORMATION CENTER"/>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
       <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
         <SidebarRow Icon={StorefrontIcon} title="Marktplace" />
          <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
           <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    
      </div>
          
    )
}

export default Sidebar;
