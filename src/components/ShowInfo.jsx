import React from "react";
class ShowInfo extends React.Component {
  render(){
    const {error, info} = this.props;
    return (
      <>
      { this.props.error && <div>{error}</div> }
        {info &&
          <div className="show-info" key={info.id} style={{
            backgroundImage: `url("${info.image? info.image.original: '../images/blank-show.png'}")`
          }}>
            <div className="layer">
              <h2>{info.name}</h2>
              <div className="genres">
                <span>{info.genres.join(' / ')}</span>
                <span>{info.rating.average}</span>
              </div>
              <p dangerouslySetInnerHTML={{ __html: info.summary.length > 500 ? info.summary.slice(0, 550) + '...': info.summary }}></p>
            </div>
          </div>
        }
        </>
    );
  }
}

export default ShowInfo;