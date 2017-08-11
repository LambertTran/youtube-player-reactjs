import React, {Component} from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {term: ''};
    this.handleChange=this.handleChange.bind(this);
  }

  // search term when user inputted
  handleChange(event){
    this.setState({term:event.target.value});
    // call function from parent component to search for list of video
    this.props.onSearch(this.state.term); 
  }


  render(){
    return (
      <div className="search-bar">  
        <input
          value= {this.state.term} 
          onChange={this.handleChange} 
          type="text"/>
      </div>
    );
  }
}

export default SearchBar;