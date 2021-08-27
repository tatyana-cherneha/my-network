import './App.scss'
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"

function App() {
  return (
    <div className='wrapper'>
        <Header />
        <Navbar />

        <div className='content'>
            <Profile />
        </div>

    </div>
  );
}

export default App;
