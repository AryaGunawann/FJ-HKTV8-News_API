// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navigation/Navbar";
import IndonesiaPage from "./Pages/IndonesiaPage";
import ProgrammingPage from "./Pages/ProgramingPage";
import Covid19Page from "./Pages/Covid19Page";
import SearchResultsPage from "./Pages/SearchResultsPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Favorites from "./Pages/Favorites";
import WelcomePage from "./Pages/WelcomePage";
import ScrollToTopButton from "./Components/ButtonScroll";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App bg-gray-200">
          <NavBar />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/indonesia" element={<IndonesiaPage />} />
            <Route path="/programming" element={<ProgrammingPage />} />
            <Route path="/covid-19" element={<Covid19Page />} />
            <Route path="/favorites" element={<Favorites />} />

            <Route
              path="/search/:searchTerms"
              element={<SearchResultsPage />}
            />
          </Routes>

          <ScrollToTopButton />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
