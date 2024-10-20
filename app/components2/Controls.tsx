// ./components/Controls.tsx
"use client";
import {
    Button,
} from '@mui/material'
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
export default function Controls() {
    const { connect, disconnect, readyState } = useVoice();

    if (readyState === VoiceReadyState.OPEN) {
        return (
            <Button
                variant='contained'
                size='small'
                style={{
                    width: '80%',
                    alignSelf: 'center',
                }} 
                onClick={() => {
                    disconnect();
                }}
            >
                End Session
            </Button>
        );
    }

    return (

        <Button
            variant='contained'
            size='small'
            onClick={() => {
                connect()
                    .then(() => {
                        /* handle success */
                    })
                    .catch(() => {
                        /* handle error */
                    });
            }}
            style={{
                width: '80%',
                alignSelf: 'center',
            }}  
        >
            <h1 style={{borderRadius: '15px', letterSpacing: '1.5px', fontWeight: '500'}}>Start Session</h1>
        </Button>
       
    );
}
