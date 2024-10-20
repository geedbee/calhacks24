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
                <Button onClick={toggleStart} type="button" size="small" variant="contained" color="secondary" sx={{backgroundColor: "#704eff"}} style={{maxWidth: '100px', maxHeight: '100px', minWidth: '30px', minHeight: '30px'}}>
                    Press me to Start!
                </Button>
            </div>
        </div>

    )
}
