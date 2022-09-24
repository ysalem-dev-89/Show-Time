import {fetchData}  from "../utils/useFetch";
import React from 'react';
class SeasonInfo extends React.Component{

  state = {
    seasonInfo: null,
  };

  componentDidMount(){
    fetchData(`https://api.tvmaze.com/seasons/${this.props.id}`)
    .then(data => {
      this.setState({
        seasonInfo: data,
      })
    }).catch(err => console.log(err));

  }

  render(){
    return (this.state.seasonInfo && 
      <div className="show-info" key={this.state.seasonInfo.id}  style={{ 
        backgroundImage: `url("${this.state.seasonInfo.image?this.state.seasonInfo.image.original: '../images/blank-show.png'}")` 
      }}>
        <div className="layer">
          <h2>Season {this.state.seasonInfo.number}</h2>
          <p>Premiered at: {this.state.seasonInfo.premiereDate}</p>
          <p>Episodes: {this.state.seasonInfo.episodeOrder}</p>
        </div>
      </div>
    );
  }
} 

export default SeasonInfo;