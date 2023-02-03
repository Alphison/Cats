import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CatsContainer from "./components/cats/catsContainer";
import CatsFavoriteContainer from "./components/catsFavorite/catsFavoriteContainer";

import { Header } from "./components/header/header";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
              <Route path="/" element={<CatsContainer/>}/>
              <Route path="/cats-favorite" element={<CatsFavoriteContainer />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
