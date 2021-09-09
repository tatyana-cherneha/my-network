import {
    addMsgActionCreator,
    updateNewMsgTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMsgText: state.dialogsPage.newMsgText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMsgText: (newMsg) => {
            dispatch(updateNewMsgTextActionCreator(newMsg))
        },
        sendMsgClick: () => {
            dispatch(addMsgActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer
