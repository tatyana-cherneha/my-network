import './App.scss'
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    // debugger
  return (
      <BrowserRouter>
          <div className='wrapper'>
              <Header />
              <Navbar store={props.store} />

              <div className='content'>
                  <Route path='/profile' render={() => <Profile store={props.store} /> } />
                  <Route path='/messages' render={ () => <DialogsContainer store={props.store} /> } />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/setting' component={Settings} />
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
