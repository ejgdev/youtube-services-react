import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

// is a type that allows you to define an object with any key and value of type React.CSSProperties .
export interface IStyles { [property: string]: React.CSSProperties; }

export const searchBarStyles = {
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '12rem',
    width: '100%',
    backgroundColor: grey[900],
    marginBottom: '2rem',
  },
  searchInput: {
    maxWidth: '50%',
    '& .MuiOutlinedInput-root': {
      paddingRight: 0,
    },
  },
}

export const useVideoDetailStyles = makeStyles({
  videoContainer: {
    position: 'relative',
    paddingBottom: '50.25%',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: ' 100%',
  },
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  channelTitle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  description: {
    padding: '1rem',
    borderRadius: '1rem',
    cursor: 'pointer',
    backgroundColor: grey[800],
  },
  descriptionButton: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
});