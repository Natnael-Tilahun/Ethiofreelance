import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return ( 
        <div className="header">
            <div className="headerLeft" >
            <img src="https://source.unsplash.com/user/erondu/1600x900" alt="logo"></img>
            <SearchIcon/>
            <input type="text" placeholder="search facebook"/>
            </div>
            <div className="headerMiddle" >
           <div className="header__option">
            <HomeIcon fontSize="large"/>
           </div>
           <div className="header__option">
            <FlagIcon fontSize="large"/>
           </div>
           <div className="header__option">
            <SubscriptionsIcon fontSize="large"/>
           </div>
           <div className="header__option">
            <StorefrontIcon fontSize="large"/>
           </div>
           <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large"/>
           </div>
            </div>
            <div className="headerRight">
                <div className="headerInfo">
                    <Avatar/>
                    <h4>Abenezer</h4>

                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    
                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>
                    
                    <IconButton>
                        <AddIcon/>
                    </IconButton>


                </div>

            </div>
        </div>
		
    )
}

export default Header;