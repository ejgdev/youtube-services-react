import React from 'react';
import { Box, Avatar, Typography, Collapse } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useVideoDetailStyles } from './styles';

// Define the Props type for the VideoDetail component
type VideoDetailProps = {
  video: any;
};

// Define the VideoDetail component as a functional component
const VideoDetail = ({ video }: VideoDetailProps) => {
  const classes = useVideoDetailStyles();

  // Use the useState hook to store the checked state
  const [checked, setChecked] = React.useState(false);

  // If the video is not defined, return a loading message
  if (!video) {
    return <div>Loading...</div>;
  }

  // Extract the videoId and title from the video object
  const videoId = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const { title } = video;

  // Return the VideoDetail component
  return (
    <Box>
      <Box className={classes.videoContainer}>
        <iframe className={classes.iframe} title={title} src={url} />
      </Box>
      <Box>
        <Box className={classes.title}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {title}
          </Typography>
        </Box>
        <Box className={classes.channelTitle}>
          <Avatar>
            <PersonIcon />
          </Avatar>
          <Typography variant="subtitle1" sx={{ ml: 1, fontWeight: 800 }}>
            {video.channelTitle}
          </Typography>
        </Box>
        <Box
          className={classes.description}
          onClick={() => setChecked(!checked)}
        >
          <Collapse in={checked} collapsedSize={20}>
            <Typography variant="body1">{video.description}</Typography>
          </Collapse>
        </Box>
        <Box
          className={classes.descriptionButton}
          onClick={() => setChecked(!checked)}
        >
          {checked ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
