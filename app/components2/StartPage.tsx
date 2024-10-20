import React from 'react'
import {
    Button,
} from '@mui/material'

export default function StartPage(props:any) {
    function toggleStart(){
        props.setHasStarted(true);
    }

    return (
        <div className="h-full flex align-items justify-center">
            <div className="flex justify-center align-items">
                <Button onClick={toggleStart} type="button" size="small"  style={{maxWidth: '100px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>
                    Press me to Start!
                </Button>
            </div>
        </div>

    )
}
