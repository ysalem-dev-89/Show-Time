import SeasonInfo from './SeasonInfo';
import EpisodeList from './EpisodeList';
import React from "react";

const getId = () => {
  const splits = window.location.href.split('/');
  return splits[splits.length -1];
}

class ShowDetails extends React.Component {
  id = getId();

  componentDidMount(){
    this.props.setPage('Episodes');
  }

  render (){
    return (
      <div className="show-details">
        <SeasonInfo id={this.id} />
        <EpisodeList id={this.id} />
      </div>
    );
  }
} 
export default ShowDetails;