import './App.css';
import 'antd/dist/antd.css'
import Router from './Header/RouterFile';
import {BrowserRouter}from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Router />
    </div>
    </BrowserRouter>

  );
}

export default App;
