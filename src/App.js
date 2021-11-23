import React, { useEffect, useCallback, useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';

import {
  onMessage
} from './service/mockServer';

function App() {
  const [submittedData, setSubmittedData] = useState();

  const handleMessage = useCallback(async formData => {
    setSubmittedData(formData);
  }, []);

  useEffect(() => {
    onMessage(handleMessage);
  }, [handleMessage]);

  return (
    <>
      <Header />
      <Container>
        <Content />
      </Container>
    </>
  );
}

export default App;
