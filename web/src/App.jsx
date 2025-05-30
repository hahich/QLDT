import { useState } from 'react';
import AuthContainer from './page/authContainer/AuthAccount';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './page/profilePage';
import Home from './page/home/home';

function App() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className='main'>
      <main>
        <Routes>
          <Route path="/" element={<AuthContainer />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/profile/:activepage"
            element={<ProfilePage />}
          />
          
        </Routes>
      </main>
    </div>
  )
}

export default App
