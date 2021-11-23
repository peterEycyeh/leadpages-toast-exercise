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

      <BasicTable formSubmissions={formSubmissions} />
    </Box>
  );
}

Content.propTypes = {
  formSubmissions: PropTypes.array,
}
