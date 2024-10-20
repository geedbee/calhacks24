import React from "react";
import Sentiment from "./Sentiment";
import Image from "next/image";
import {Avatar, Box} from "@mui/material";
import AvatarPage from "@/app/page5/components/AvatarPage";
import "../globals.css";

export default function Assistant(props) {
  return (
    <>
      <div className="flex align-items">
        {props.name}
        {props.latestMessageAssistant &&
          props.latestMessageAssistant.message &&
          props.latestMessageAssistant.message.content}
              <div className=""
              >
                  <Avatar
                      src="/assets/leAvatar.png"
                      alt="Character Avatar"
                      sx={{
                          width: '100%',
                          height: '100%',
                          maxWidth: 450,
                          maxHeight: 450
                      }}
                  />
              </div>
      </div>
    </>
  );
}
