import './App.scss'
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {BrowserRouter, Route} from 'react-router-dom'

function App(props) {
  return (
      <BrowserRouter>
          <div className='wrapper'>
              <Header />
              <Navbar state={props.store.navBar} />

              <div className='content'>
                  <Route path='/profile' render={() => <Profile state={props.store.profilePage}
                                                                addPost={props.addPost}
                                                                updateNewPostText={props.updateNewPostText}
                  /> } />
                  <Route path='/messages' render={ () => <Dialogs state={props.store.dialogsPage}
                                                                  addMsg={props.addMsg}
                  /> } />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/setting' component={Settings} />
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
