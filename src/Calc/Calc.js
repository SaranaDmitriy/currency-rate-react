import React from "react";
import "./Calc.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      resultSale: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { currencyRate: props.currencyRate };
  }

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements["count-currency"].value;
    let typeCurrency = elements["type-currency"].value;

    this.state.currencyRate.filter((elem) => {
      if (elem.ccy === typeCurrency) {
        this.setState({ result: (countCurrency * elem.sale).toFixed(2) + " " + elem.base_ccy });
      }
    });
  };

  calcRateSale = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrencySale = elements["count-currency-sale"].value;
    let typeCurrencySale = elements["type-currency-sale"].value;

    this.state.currencyRate.filter((elem) => {
      if (elem.ccy === typeCurrencySale) {
        this.setState({ resultSale: (countCurrencySale * elem.buy).toFixed(2) + " " + elem.base_ccy });
      }
    });
  };

  render() {
    return (
      <div className="calculator">
        <h3>Калькулятор обмена</h3>
        <div className="flex-container">
          <div className="block">
            <div>Я хочу купить в Приват Банке</div>
            <div>
              <form onSubmit={this.calcRate}>
                <input type="number" defaultValue="100" name="count-currency" step="any" />
                <select name="type-currency">
                  {this.state.currencyRate.map((elem) => (
                    <option defaultValue={elem.ccy} key={elem.ccy}>
                      {elem.ccy}
                    </option>
                  ))}
                </select>
                <input type="submit" defaultValue="Calc" />
              </form>
            </div>

            <div>
              <h4>Результат</h4>
              <ul className="calc-res">
                <li>{this.state.result}</li>
              </ul>
            </div>
          </div>

          <div className="block">
            <div>Я хочу продать в Приват Банке</div>
            <div>
              <form onSubmit={this.calcRateSale}>
                <input type="number" defaultValue="100" name="count-currency-sale" step="any" />
                <select name="type-currency-sale">
                  {this.state.currencyRate.map((elem) => (
                    <option defaultValue={elem.ccy} key={elem.ccy}>
                      {elem.ccy}
                    </option>
                  ))}
                </select>
                <input type="submit" defaultValue="Calc" />
              </form>
            </div>

            <div>
              <h4>Результат</h4>
              <ul className="calc-res">
                <li>{this.state.resultSale}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
