// ./components/Messages.tsx
"use client";
import { useVoice } from "@humeai/voice-react";
import Sentiment from "@/components/Sentiment";
import {useEffect, useRef} from "react";
import User from "@/components/User";
import Assistant from "@/components/Assistant";

export default function Messages(props) {
    const { messages } = useVoice();
    // let latestAssistant = null;
    // let latestUser = null;
    let latestAssistant = useRef(null);
    let latestUser = useRef(null);

    useEffect(() => {
        if (messages){
            if (messages[messages.length-1] && messages[messages.length-1].type === "user_message"){
                latestUser.current = messages[messages.length - 1];
            }
            if (messages[messages.length-1] && messages[messages.length-1].type === "assistant_message"){
                latestAssistant.current = messages[messages.length - 1];
            }
        }
    }, [messages])

    return (
        <div>
            {/*{messages.map((msg, index) => {*/}
            {/*    if (msg.type === "user_message" || msg.type === "assistant_message") {*/}
            {/*        return (*/}
            {/*            <div key={msg.type + index}>*/}
            {/*                <div>{msg.message.role}</div>*/}
            {/*                <div>{msg.message.content}</div>*/}

            {/*                <Sentiment values={{ ...msg.models.prosody?.scores }}/>*/}
            {/*            </div>*/}
            {/*        );*/}
            {/*    }*/}

            {/*    return null;*/}
            {/*})}*/}

            <div className="flex flex-col-2 w-max">
                <div>
                    <Assistant latestMessageAssistant={latestAssistant.current}/>

                </div>
                <div>
                    <User latestMessageUser={latestUser.current}/>

                </div>

            </div>
        </div>
    );
}
