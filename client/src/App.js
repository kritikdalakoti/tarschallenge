import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/home';
import ImageSearch from './screens/imagesearch';
import { createBrowserHistory as createHistory } from "history";
import TopBar from './screens/header'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <TopBar />
        <Routes >

          <Route
            path="/home"
            element={<Home />}
            exact
          />
          <Route
            path="/imagesearch"
            exact
            element={<ImageSearch />}/>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
