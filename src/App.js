import './App.css';
import { RecoilRoot } from 'recoil';
import Home from './component/Home/home';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </div>
  );
}

export default App;
