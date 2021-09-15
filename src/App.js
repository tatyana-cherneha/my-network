import './App.scss'
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    // debugger
  return (
      <BrowserRouter>
          <div className='wrapper'>
              <HeaderContainer />
              <Navbar store={props.store} />

              <div className='content'>
                  <Route path='/profile/:userId' render={() => <ProfileContainer store={props.store} /> } />
                  <Route path='/messages' render={ () => <DialogsContainer store={props.store} /> } />
                  <Route path='/users' render={() => <UsersContainer store={props.store} />} />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/setting' component={Settings} />
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
