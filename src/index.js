import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//class that we created
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY ='AIzaSyARtOH1BaAmSF4zu-A4OXFh-cmIMVERWnI'; //youtube API key


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			videos:[],  // define data structure
			selectiveVideo:null // selective video to play
		};	
		this.videoSearch('helloworld')
	}

	videoSearch(term){


		//fetch JSON data
		// use API key and term to search for coressponding data
		YTSearch({key: API_KEY, term:term},(videos) =>{
			this.setState({ 
				videos:videos,
				selectiveVideo:videos[0] //set the initial value to the first video
			});
		});
	}

	render () {

		const videoSearch = _.debounce((term) => {this.videoSearch(term)},500);

  		return(
		  	<div>  	
		  		<SearchBar onSearchTermChange={videoSearch} />
		  		<VideoDetail video={this.state.selectiveVideo} />
		  		<VideoList 
					onVideoSelect={selectiveVideo => this.setState({selectiveVideo})}
		  			videos={this.state.videos} />
		  	</div>
		);
	}
}

ReactDOM.render(<App />,document.getElementById('container'));

