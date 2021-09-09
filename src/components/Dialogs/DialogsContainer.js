import React from 'react'
import {
    addMsgActionCreator,
    updateNewMsgTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

function DialogsContainer (props) {
    let state = props.store.getState().dialogsPage;

    let onSendMsgClick = () => {
        props.store.dispatch(addMsgActionCreator())
    }

    let onNewMsgChange = (newMsg) => {
        props.store.dispatch(updateNewMsgTextActionCreator(newMsg))
    }


    return (
        <Dialogs updateNewMsgText={onNewMsgChange}
                 sendMsgClick={onSendMsgClick}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer
