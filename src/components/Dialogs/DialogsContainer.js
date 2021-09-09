import {
    sendMsgActionCreator,
    updateNewMsgTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMsgText: (newMsg) => {
            dispatch(updateNewMsgTextActionCreator(newMsg))
        },
        sendMsgClick: () => {
            dispatch(sendMsgActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer
