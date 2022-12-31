import { debounce } from 'lodash';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Container } from '@mui/material';
import { YouTubeSearchResults } from 'youtube-search';

import FooterComponent from '../../commons/fragments/Footer';
import SearchBar from '../fragments/searchBar';
import VideoList from '../fragments/videoList';
import VideoDetail from '../fragments/videoDetail';
import ytResults from '../../../api/ytResults';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
});

/**
 * Renders the AuthContainer Component
 */
const LandingView = () => {
  const classes = useStyles();

  const [videos, setVideos] = React.useState<YouTubeSearchResults[]>([]);
  const [selectedVideo, setSelectedVideo] =
    React.useState<YouTubeSearchResults | null>(null);

  const videoSearch = (term: string) => {
    const ytResultsFilter = ytResults.filter((video) =>
      video.title.toLowerCase().includes(term.toLowerCase())
    );
    setVideos(ytResultsFilter);
    setSelectedVideo(ytResultsFilter[0]);
  };

  React.useEffect(() => {
    // Initial search
    videoSearch('');
  }, []);

  const videoSearchDebounced = debounce(videoSearch, 500);

  return (
    <Box className={classes.root}>
      <SearchBar onSearchTermChange={videoSearchDebounced} />
      <Container component="main" maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              onVideoSelect={(selected) => setSelectedVideo(selected)}
              videos={videos}
            />
          </Grid>
        </Grid>
      </Container>
      <FooterComponent />
    </Box>
  );
};

export default LandingView;
