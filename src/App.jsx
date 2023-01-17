import { useEffect } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CatsContainer from "./components/cats/catsContainer";
import CatsFavoriteContainer from "./components/catsFavorite/catsFavoriteContainer";
import { Header } from "./components/header/header";
import { setCatsThunk } from "./redusers/catsReducer";
import store from "./redux/store";

function App(props) {
  useEffect(() => {
    props.setCatsThunk()
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
              <Route path="/" element={<Provider store={store}><CatsContainer/></Provider>}/>
              <Route path="/cats" element={<Provider store={store}><CatsContainer/></Provider>}/>
              <Route path="/cats-favorite" element={<CatsFavoriteContainer />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default connect(null, {setCatsThunk})(App);
