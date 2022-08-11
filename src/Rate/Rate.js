import React from "react";
import "./Rate.css";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {},
    };
    this.currency = ["USD", "UAH", "RUB"];
  }

  componentDidMount() {
    fetch(
      "https://api.apilayer.com/exchangerates_data/latest?apikey=vTLj120LK4pbmyM8Km6uvvHpgRtf65kk"
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ date: response.date });
        let res = {};
        for (let i = 0; i < this.currency.length; i++) {
          res[this.currency[i]] = response.rates[this.currency[i]];
        }
        this.setState({ currencyRate: res });
      });
  }

  render() {
    return (
      <div className="rate">
        <h3>Курс на {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((elem) => (
            <div className="block flex-item" key={elem}>
              <div className="currency-name">{elem}</div>
              <div className="currency-in">{this.state.currencyRate[elem].toFixed(2)}</div>
              <p>* Можно купить за 1 EUR</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Rate;

//   constructor(props) {
//     super(props);
//     this.state = {
//       date: "",
//       currencyRate: {},
//     };
//     this.currency = ["USD", "RUB", "CAD", "UAH"];
//   }

//   componentDidMount() {
//     fetch(
//       "https://api.apilayer.com/exchangerates_data/latest?apikey=vTLj120LK4pbmyM8Km6uvvHpgRtf65kk"
//     )
//       .then((data) => data.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({ date: data.date });
//         let result = {};
//         for (let i = 0; i < this.currency.length; i++) {
//           result[this.currency[i]] = data.rates[this.currency[i]];
//         }
//         this.setState({ currencyRate: result });
//       });
//   }

//   render() {
//     return (
//       <div className="rate">
//         <h3>Курс на {this.state.date}</h3>
//         <div className="flex-container">
//           {Object.keys(this.state.currencyRate).map((keyName, i) => (
//             <div className="block flex-item" key={keyName}>
//               <div className="currency-name">{keyName}</div>
//               <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}</div>
//               <p>* Можно купить за 1 EUR</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
