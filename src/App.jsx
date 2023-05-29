import './App.css';
import Home from './Page/Home';
import Background from './Components/Background'
import Navbar from './Components/Navbar';
import SocialBut from './Components/SocialBut';

function App() {

  return (
    <>
      <Background />
      <Navbar />
      <Home />
      <div style={{ background: "black", width: "100vw" }}>
        <SocialBut />
      </div>
    </>
  )
}

export default App
