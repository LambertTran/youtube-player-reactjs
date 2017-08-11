import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//import components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// googley API key
const API_KEY ='AIzaSyARtOH1BaAmSF4zu-A4OXFh-cmIMVERWnI'; //youtube API key

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos:[],  
      selectiveVideo:null 
      };
    this.handleSearch=this.handleSearch.bind(this);

    //initiate first state
    this.handleSearch("hello");
  }

  // Search for list of 5 videos
  handleSearch(term){
    YTSearch({key: API_KEY, term:term},(videos) =>{
      this.setState({ 
        videos:videos,
        selectiveVideo:videos[0] //default selected video at first video
      });
    });
  }


  render () {
    const videoSearch = _.debounce((term) => {this.handleSearch(term)},1000);
    return(
      <div>
        <SearchBar onSearch={videoSearch} />
        <VideoDetail video={this.state.selectiveVideo} />
        <VideoList 
          onVideoSelect={selectiveVideo => this.setState({selectiveVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('container'));

