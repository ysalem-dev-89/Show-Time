import React from 'react';
import { Link } from "react-router-dom";

class SeasonList extends React.Component{
  render() {
    const { seasons, error } = this.props;
    return (
      <div className="season-list">
        <ul className="card-list">
          {error && <div>{error}</div>}
          {seasons && seasons.map(season => (
            <li className="card" key={season.id}>
              <Link className="card-link" to={`/shows/season/${season.id}`}>
                <img src={season.image? season.image.medium: '../images/blank-show.png'} alt="" />
                <div className="layer">
                  <div className="info">
                    <h2>Season {season.number}</h2>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  };
}

export default SeasonList;