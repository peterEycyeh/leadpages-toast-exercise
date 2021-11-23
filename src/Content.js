import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BasicTable from './components/BasicTable';

export default function Content(props) {
  const { formSubmissions } = props;

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      {/* <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
        TODO: List of liked submissions here (delete this line)
      </Typography> */}
      <BasicTable formSubmissions={formSubmissions} />
    </Box>
  );
}

Content.propTypes = {
  formSubmissions: PropTypes.array,
}
