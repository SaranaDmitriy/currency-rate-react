import React from "react";
import "./Rate.css";
import Calc from "../Calc/Calc";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: [],
    };
    this.currency = ["USD", "EUR", "BTC"];
    this.today = new Date().toLocaleDateString();
    this.updateFrequency = 60 * 60 * 1000;
  }

  componentDidMount() {
    if (localStorage.getItem("time") && +localStorage.getItem("time") + this.updateFrequency < Date.now()) {
      this.setState({ currencyRate: JSON.parse(localStorage.getItem("currencyRate")) });
    } else {
      localStorage.setItem("time", Date.now());

      fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("currencyRate", JSON.stringify(response));
          this.setState({ currencyRate: JSON.parse(localStorage.getItem("currencyRate")) });
        });
    }
  }

  render() {
    return (
      <div className="rate">
        <h3>Курс на {this.today}</h3>
        <div className="flex-container">
          {this.state.currencyRate.map((elem) => (
            <div className="block flex-item" key={elem.ccy}>
              <div className="currency-name">{elem.ccy}</div>
              <p>
                Можно продать в Приват Банке по курсу - {Number(elem.buy).toFixed(2) + " " + elem.base_ccy + "  "}
                за единицу
              </p>
            </div>
          ))}
        </div>
        <div className="flex-container">
          {this.state.currencyRate.map((elem) => (
            <div className="block flex-item" key={elem.ccy}>
              <div className="currency-name">{elem.ccy}</div>
              <p>
                Можно купить в Приват Банке по курсу - {Number(elem.sale).toFixed(2) + " " + elem.base_ccy + "  "}
                за единицу
              </p>
            </div>
          ))}
        </div>

        <Calc currencyRate={this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;
