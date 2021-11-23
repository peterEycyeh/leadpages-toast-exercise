import React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';

function App() {
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
