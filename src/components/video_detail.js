import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const { title } = video;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title={title} src={url} />
      </div>
      <div className="details">
        <div><h3>{title}</h3></div>
        <div>{video.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
