import ShowInfo from './ShowInfo';
import SeasonList from './SeasonList';
import {fetchData} from '../utils/useFetch.js';
import React from "react";

const getId = () => {
  const splits = window.location.href.split('/');
  return splits[splits.length -1];
}
class ShowDetails extends React.Component {

    id = getId();  
    state = {
      // page: 'seasons',
      error: null,
      error2: null,
      isLoading: true,
      isLoading2: true,
      showInfo: null,
      seasons: null
    }

    componentDidMount(){
      this.props.setPage('Seasons');
      fetchData(`https://api.tvmaze.com/shows/${this.id}`).then(data => {
        this.setState({showInfo: data, isLoading: false})
      })
      .catch((err) => this.setState({error: err}));

      fetchData(`https://api.tvmaze.com/shows/${this.id}/seasons`).then(data => {
        this.setState({seasons: data, isLoading2: false})
      })
      .catch((err) => {
        this.setState({error2: err, isLoading2: false});
      })
    }

    render(){
      let section;
      if (this.state.isLoading || this.state.isLoading2) {
        section = <div className="lds-facebook"><div></div><div></div><div></div></div>;
      } else {
        section = (
          <>
            <ShowInfo info={this.state.showInfo} error={this.state.error2 } />
            <SeasonList seasons={this.state.seasons} error={this.state.error} isLoading={this.state.isLoading} id={this.id} />
          </>)
          ;
      }
    
      return (
        <div className="show-details">
          {section}
        </div>
      );
    }
   
} 

export default ShowDetails;