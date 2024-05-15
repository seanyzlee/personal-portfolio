import React from "react";

//pages and components
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WOW from "wowjs";

class App extends React.Component {
  // Defining WOW
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />

           
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
