import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchBarStyles } from './styles';
import { ITheme } from '../../../style/types';

// Define the styles for the SearchBar component
// The makeStyles and createStyles hooks are commonly used in muiV4
const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    ...searchBarStyles,
    adornment: {
      backgroundColor: theme.palette.divider,
      padding: '28px 14px',
      borderTopRightRadius: theme.shape.borderRadius + 'px',
      borderBottomRightRadius: theme.shape.borderRadius + 'px',
    },
  })
);

// Define the Props type for the SearchBar component
type SearchBarProps = {
  onSearchTermChange: (term: string) => void;
};

// Define the SearchBar component as a functional component
const SearchBar = ({ onSearchTermChange }: SearchBarProps) => {
  const classes = useStyles();
  // Use the useState hook to store the search term
  const [term, setTerm] = React.useState('');

  // Define an onInputChange function to handle changes to the input field
  const onInputChange = (event: any) => {
    setTerm(event.target.value);
    onSearchTermChange(event.target.value);
  };

  // Return the SearchBar component
  return (
    <Box className={classes.searchContainer}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        placeholder="Search for...(cats, music, any word included on the video titles)"
        color="primary"
        className={classes.searchInput}
        value={term}
        onChange={onInputChange}
        fullWidth
        helperText="Note: This search is limited to a selected set of videos to avoid the KEY limitation of YT services."
        InputProps={{
          endAdornment: (
            <InputAdornment className={classes.adornment} position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

// Export the SearchBar component
export default SearchBar;
