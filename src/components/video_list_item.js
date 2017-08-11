import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} 
        className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img 
            alt="description" 
            className="media-object" 
            src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading"> 
            <h2>
              {video.snippet.title} 
            </h2>
          </div>
        </div>
      </div>
    </li>
  );
};


export default VideoListItem;