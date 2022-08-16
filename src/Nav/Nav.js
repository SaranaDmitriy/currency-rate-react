import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/exchange">Пункты обмена</a>
              </li>
              <li>
                <a href="/about">О нас</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
