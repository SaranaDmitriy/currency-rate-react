import React from "react";
import "./App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";
import Exchange from "./Exchange/Exchange";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="site">
          <Header />

          <main className="container">
            <Routes>
              <Route path="/" element={<Rate />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/about" element={<About />} />
            </Routes>

            <div id="cookie_info">
              <div className="site-content">
                <div className="well">
                  На нашем сайте мы используем cookie для сбора информации технического характера.{" "}
                  <br />В частности для персонифированной работы сайта мы обрабатываем IP-адресс
                  региона вашего местоположения.&nbsp;{" "}
                  <button className="btn btn-primary btn-sm"> ОК </button>
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
