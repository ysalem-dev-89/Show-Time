import {fetchData} from "../utils/useFetch";
import React from "react";

// const getId = () => {
//   const splits = window.location.href.split('/');
//   return splits[splits.length -1];
// }

class EpisodeList extends React.Component {
  state = {
    error: null,
    isLoading: true,
    episodes: null 
  };

  componentDidMount(){
    fetchData(`https://api.tvmaze.com/seasons/${this.props.id}/episodes`)
    .then(data => {
      this.setState({
        error: null,
        isLoading: false,
        episodes: data 
      })
    }).catch(err => this.setState({
      error: err,
      isLoading: false,
    }));

  }

  render(){
    return (
      <div className="season-list">
      <ul className="card-list">
        {this.state.error && <div>{this.state.error}</div>}
        {this.state.isLoading && <div>Loading....</div>}
        {this.state.episodes && this.state.episodes.map(episode => (
        <li className="card" key={episode.id}>
        <a className="card-link" href={episode.url}>
          <img src={episode.image? episode.image.medium: '../images/blank-show.png'} alt="" />
          <div className="layer">
              <div className="info">
                <h2>Episode {episode.number}</h2>
              </div>
          </div>
        </a>
      </li>
        ))}
      </ul>
    </div>
    )
}

}

export default EpisodeList;