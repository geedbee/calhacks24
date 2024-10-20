import React from 'react'
import {
    Button,
} from '@mui/material'
import './startpage.css'

export default function StartPage(props:any) {
    function toggleStart(){
        props.setHasStarted(true);
    }

    const startButtonStyle = {
        borderRadius: '50%', 
        width: '200px', 
        height: '200px',
        marginBottom: '50px'
    }
    return (
        <div className="h-full flex align-items justify-center">
            <div className="flex justify-center align-items items-center">
                <Button className="hoverable" onClick={toggleStart} type="button" size="small" variant="contained" color="secondary" sx={{backgroundColor: "#704eff", transition: 'all 0.5s ease-out'}} style={startButtonStyle}>
                    <img src="assets/startarrow.png"/>
                </Button>
            </div>
        </div>

    )
}
