import React from "react";
import "./App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="site">
        <Header />

        <div className="container">
          <main>
            <Rate />

            <h3>Калькулятор обмена</h3>
            <div className="block">
              <div>Я хочу</div>
              <div>
                <label>
                  <input type="radio" name="radio" defaultValue="0" />
                  купить
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="radio" defaultValue="1" />
                  продать
                </label>
              </div>
              <div>
                <input type="number" defaultValue="150" />
                <select name="" id="">
                  <option defaultValue="USD">USD</option>
                  <option defaultValue="RUB">RUB</option>
                  <option defaultValue="EUR">EUR</option>
                </select>
              </div>
              <div>
                <h4>Результат</h4>
                <ul className="calc-res">
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                </ul>
              </div>
            </div>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">
              На нашем сайте мы используем cookie для сбора информации технического характера.{" "}
              <br />В частности для персонифированной работы сайта мы обрабатываем IP-адресс региона
              вашего местоположения.&nbsp; <button className="btn btn-primary btn-sm"> ОК </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;