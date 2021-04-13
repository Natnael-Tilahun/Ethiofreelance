import React from 'react';
import "./MessageSender.css";
import Avatar from '@material-ui/core/Avatar';

function MessageSender() {
    return (
        <div className="messageSender">
        <div className="messageSender__top">
        <Avatar />
        <form>
        <input type="text" placeholder={'what`s on your mind'} />
        </form>
        </div>
        </div>
    )
}

export default MessageSender
