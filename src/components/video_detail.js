import React from 'react';

const VideoDetail = ({video}) => {

  // if initial state of video is empty,
  // rendering Loading intead of videos 
  if(!video){
    return <div>Loading...</div>;
  }

  //decompose the video passed from parent component
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe 
          title="unique" 
          className="embed-responsive-item" 
          src={url}> 
         </iframe>
      </div>
      <div className="detail">
        <h3>{video.snippet.title}</h3>
      </div>
    </div>
  );
};


export default VideoDetail;