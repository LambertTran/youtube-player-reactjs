import React from 'react';
import VideoListItem from './video_list_item';

// function base component

const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {

		// each item go with a etag as key to keep track 
		// send item to video_list_item to get <li> list
		return <VideoListItem 
			onVideoSelect = {props.onVideoSelect}
			key={video.etag} 
			video={video} />
	});
	
	return (
		<ul className="col-md-4 list-group">
			{videoItems}	
		</ul>
	);
};


export default VideoList;