import React, { useEffect, useCallback, useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import Toast from './components/Toast';

import {
  onMessage,
  saveFormSubmission
} from './service/mockServer';

function App() {
  const [submittedData, setSubmittedData] = useState();
  const [isToastOpen, setIsToastOpen] = useState(false);

  const handleMessage = useCallback(async formData => {
    setSubmittedData(formData);
    setIsToastOpen(true)
  }, []);

  useEffect(() => {
    onMessage(handleMessage);
  }, [handleMessage]);

  const handleClickCloseToast = () => {
    setIsToastOpen(false);
  }

  const handleClickLike = async () => {
    const likedFormData = { ...submittedData };
    likedFormData.data.liked = true;
    const response = await saveFormSubmission(likedFormData);
    
    console.log(response)
  }

  return (
    <>
      <Header />
      <Container>
        <Content />
      </Container>
      <Toast 
        data={submittedData?.data}
        open={isToastOpen}
        onClickClose={handleClickCloseToast}
        onClickLike={handleClickLike}
      />
    </>
  );
}

export default App;
