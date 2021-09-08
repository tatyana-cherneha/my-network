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
              <Navbar state={props.state.navBar} />

              <div className='content'>
                  <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                                dispatch={props.dispatch}
                  /> } />
                  <Route path='/messages' render={ () => <Dialogs store={props.store}
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
