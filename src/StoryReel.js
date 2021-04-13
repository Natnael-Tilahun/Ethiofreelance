import React from 'react';
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
        <Story
        image="https://source.unsplash.com/user/erondu/1600x900"
        profileSrc="https://source.unsplash.com/user/erondu/1600x900"
        title="Abenezer Kifle"
        />
        <Story
        image="https://source.unsplash.com/user/erondu/1600x900"
        profileSrc="https://source.unsplash.com/user/erondu/1600x900"
        title="Natnael Tilahun"
        />
        <Story
        image="https://source.unsplash.com/user/erondu/1600x900"
        profileSrc="https://source.unsplash.com/user/erondu/1600x900"
        title="Josef Tshome"
        />
        <Story
        image="https://source.unsplash.com/user/erondu/1600x900"
        profileSrc="https://source.unsplash.com/user/erondu/1600x900"
        title="Yonas Kemon"
        />
        <Story
        image="https://source.unsplash.com/user/erondu/1600x900"
        profileSrc="https://source.unsplash.com/user/erondu/1600x900"
        title="Esubalwe Galo"
        />
            
        </div>
    )
}

export default StoryReel
