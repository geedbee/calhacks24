import React from 'react'

export default function StartPage(props:any) {
    function toggleStart(){
        props.setHasStarted(true);
    }

    return (
        <div>
            <button onClick={toggleStart} type="button">
                Press me to Start!
            </button>
        </div>
    )
}
