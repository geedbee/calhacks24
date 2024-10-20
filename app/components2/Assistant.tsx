import React from "react";
import Sentiment from "./Sentiment";
import Image from "next/image";

export default function Assistant(props) {
  return (
    <>
      <div className="">
        {props.name}
        {props.latestMessageAssistant &&
          props.latestMessageAssistant.message &&
          props.latestMessageAssistant.message.content}
        <Image
          src="/assets/oshawottimage.jpg"
          alt="oshawoott"
          width={600}
          height={600}
        />
      </div>
    </>
  );
}
