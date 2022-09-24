import { Link } from "react-router-dom";
import React from 'react'
class ShowList extends React.Component {
  render() {
    return (
      <div className="card-list">
        <div className="container">
          {this.props.shows && this.props.shows.slice(0, this.props.moreNum).map((show => {
          const optimizedShow = show.show ? show.show : show;
          return (
            <div className="card" key={optimizedShow.id}>
                <Link className="card-link" to={`/shows/${optimizedShow.id}`}>
                <img src={optimizedShow.image? optimizedShow.image.medium: '../images/blank-show.png'} alt="" />
                  <div className="layer">
                      <div className="info">
                        <h2>{optimizedShow.name}</h2>
                        <p>{optimizedShow.rating.average}</p>
                        <p>{optimizedShow.genres.join(' / ')}</p>
                      </div>
                  </div>
                </Link>
          </div>)  
          }))}
        </div>
      </div>
    )
  }
}

export default ShowList;


//! CLASS MODIFICATION:

// export default class ShowList extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       shows: '',
//       moreNum: ''
//     }
//   }

//   componentDidMount() {
//       this.setState({
//         shows: this.props.shows,
//         moreNum: this.props.moreNum
//       })
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.moreNum !== this.props.moreNum) {
//       this.setState({
//         shows: this.props.shows,
//         moreNum: this.props.moreNum
//       })
//     }
//   }

//   render() {
//     const { shows, moreNum } = this.state;
//     return (
//       <div className="card-list">
//         <div className="container">
//           {shows && shows.slice(0, moreNum).map((show => {
//             const optimizedShow = show.show ? show.show : show;
//             return (
//               <div className="card" key={optimizedShow.id}>
//                 <Link className="card-link" to={`/shows/${optimizedShow.id}`}>
//                   <img src={optimizedShow.image.medium} alt="" />
//                   <div className="layer">
//                     <div className="info">
//                       <h2>{optimizedShow.name}</h2>
//                       <p>{optimizedShow.rating.average}</p>
//                       <p>{optimizedShow.genres.join(' / ')}</p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>)
//           }))}
//         </div>
//       </div>
//     )
//   }
// }