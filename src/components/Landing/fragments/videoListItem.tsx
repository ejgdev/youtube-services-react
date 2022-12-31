import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import {
  ListItem,
  Card,
  Box,
  CardMedia,
  Typography,
  CardContent,
} from '@mui/material';
import { ITheme } from '../../../style/types';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    card: {
      display: 'flex',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
);

type VideoListItemProps = {
  video: any;
  onVideoSelect: (video: any) => void;
};

const VideoListItem = ({ video, onVideoSelect }: VideoListItemProps) => {
  const classes = useStyles();
  const imageUrl = video.thumbnails.default.url;

  return (
    <ListItem onClick={() => onVideoSelect(video)} sx={{ p: 0.5 }}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="youtube video thumbnail"
          sx={{ width: 110, objectFit: 'contain', backgroundColor: 'black' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {video.title}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </ListItem>
  );
};

export default VideoListItem;
