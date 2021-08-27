import './App.scss'
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"

function App() {
  return (
    <div className='wrapper'>
        <Header />
        <Navbar />

        <div className='content'>
            {/*<Profile />*/}
            <Dialogs />
        </div>

    </div>
  );
}

export default App;
