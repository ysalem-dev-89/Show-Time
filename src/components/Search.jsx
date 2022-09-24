import React from 'react';
class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            query: ''
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }


    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.props.setState({query: e.target.value})
        }
    }

    render(){
        return (
            <form className="search-bar">
                <input
                    type="text"
                    required
                    onKeyPress={this.handleKeyDown}
                    placeholder="Enter your search here.."
                />
            </form>
        );
    }
} 

export default Search; 
