import { sendMsgActionCreator, updateNewMsgTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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


let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer
