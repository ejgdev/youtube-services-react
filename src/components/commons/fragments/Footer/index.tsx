import React from 'react';
import { withStyles, WithStyles } from '@mui/styles';
import { Box, Link, Typography } from '@mui/material';
import styles from './styles';

// Get the current year
const currentYear = new Date().getFullYear();

// Define the FooterComponent props interface
interface IFooterComponent extends WithStyles<typeof styles> {}

/**
 * Renders the Footer Component
 */
const FooterComponent = ({ classes }: IFooterComponent) => (
  <Box component="footer" className={classes.footer}>
    <Typography variant="h6">
      {' '}
      By Edward Jimenez - {currentYear} |{' '}
      <Link
        href="https://github.com/ejgdev/youtube-services-react"
        underline="hover"
      >
        Github Repository
      </Link>
    </Typography>
  </Box>
);

// Export the FooterComponent using the withStyles HOC to inject the styles
// Was common in muiV3, then was replaced by the use of the makeStyles hook.
export default withStyles(styles)(FooterComponent);
