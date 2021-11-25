import './App.css';
import AvatarPicture from './components/AvatarPicture';
import ScreenSize from './components/ScreenSize';
import SizeText from './components/SizeText';
import { ScreenSizeProvider } from './context/ScreenSizeContext';

function App() {
  return (
    <div className="App">
      screen size app
      <ScreenSizeProvider>
        <ScreenSize />
        <div className="avatar-container">
          <AvatarPicture />
          <SizeText />
        </div>
      </ScreenSizeProvider>
    </div>
  );
}

export default App;
