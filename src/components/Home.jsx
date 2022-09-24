import ShowList from './ShowList';
import {fetchData} from '../utils/useFetch.js';
import Search from './Search';
import React from "react";
import '../home.css';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      moreNum: 20,
      isLoading: true,
      shows: null,
      error: null,
    } 
    this.setState = this.setState.bind(this);
  }

  componentDidMount(){
    this.props.setPage('Home');
    const url = `https://api.tvmaze.com/shows`;
    this.getShows(url);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.query !== prevState.query){
      const url = `https://api.tvmaze.com/search/shows?q=${this.state.query}`;
      this.getShows(url);
    }
  }

  getShows = (url) => {
    fetchData(url).then(data => {
      this.setState(
        {shows: data,
        isLoading: false
      })
    }).catch(err => {
      this.setState(
        {error: err,
        isLoading: false
      })
    });
  }



  render (){
    let section;
    if (this.state.isLoading) {
      section = <div className="lds-facebook"><div></div><div></div><div></div></div>;
    } else {
      section = (
          <div>
          {this.state.shows && <ShowList shows={this.state.shows} moreNum={this.state.moreNum} />}
          <button className="show-more" onClick={() => this.setState({moreNum: this.state.moreNum + 20})}>Show More</button>
          </div>)
      ;
    }
    return (
      <div className="home">
        <Search query={this.state.query} setState = {this.setState} />
        {this.state.queryerror && <div>{this.state.query.error}</div>}
        {section}
      </div>
    );
  }
} 

export default Home;