import React from 'react'
import Sentiment from './Sentiment'

export default function User(props) {
    return (
        <>
            <div className="user-container">
                {props.latestMessageUser && props.latestMessageUser.message && props.latestMessageUser.message.content}
            </div>
        </>
    )
}
