import React from 'react';
import { List } from '@mui/material';
import VideoListItem from './videoListItem';

// Define the Props type for the VideoList component
type VideoListProps = {
  videos: any[];
  onVideoSelect: (video: any) => void;
};

// Define the VideoList component as a functional component
const VideoList = (props: VideoListProps) => {
  const VideoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={`key-${video.id}`}
        video={video}
      />
    );
  });

  return <List disablePadding>{VideoItems}</List>;
};

export default VideoList;
