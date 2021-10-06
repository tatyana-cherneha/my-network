import './App.scss'
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {Route, withRouter} from 'react-router-dom';
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='wrapper'>
                <HeaderContainer />
                <Navbar store={this.props.store} />

                <div className='content'>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                    <Route path='/messages' render={withSuspense(DialogsContainer)} />
                    <Route path='/users' render={() => <UsersContainer store={this.props.store} />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/setting' component={Settings} />
                    <Route path='/login' component={Login} />
                </div>

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);
