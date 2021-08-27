import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src="" alt="logo"/>
        </header>
        <nav className='nav'>
            <ul>
                <li><a href="#p">Profile</a></li>
                <li><a href="#d">Messages</a></li>
                <li><a href="#n">News</a></li>
                <li><a href="#m">Music</a></li>
                <li><a href="#s">Setting</a></li>
            </ul>
        </nav>
        <div className='content'>
            <div className='bg-img'></div>
            <div className='profile'>
                ava + description
            </div>
            <div className='post'>
                <div><p>My post</p></div>
                <div>New post</div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    </div>
  );
}

export default App;
