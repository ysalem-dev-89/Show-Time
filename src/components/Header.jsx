/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
class Header extends React.Component {
  handleNavigate = (e) => {
    e.preventDefault();
    window.history.go(-1);
  }

  render(){
    return (
      <header>
        <div className="header">
          <a href="/">
            <i className="fa-solid fa-film"></i>
            SHOWS TIME
          </a>
        </div>
        {<div className="navigation"><a href="#" onClick={this.handleNavigate}>Back </a> / { this.props.page }</div>}
      </header>
    );
  }
}

export default Header;