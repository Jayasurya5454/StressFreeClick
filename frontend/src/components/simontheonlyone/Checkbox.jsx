import React, { useState, useEffect } from 'react';
import StyledWrapper from './StyledWrapper';
import axios from '../../utils/axiosConfig';

const Checkbox = () => {
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    // Fetch initial like count
    const fetchLikeCount = async () => {
      try {
        const response = await axios.get('/simontheonlyone/count');
        setLikeCount(response.data.count);  
      } catch (error) {
        console.error('Error fetching like count', error);
      }
    };
    fetchLikeCount();
  }, []);

  const handleLikeToggle = async () => {
    try {
      await axios.put('/simontheonlyone/updatecount');
      setLikeCount((prev) => prev + 1); 
    } catch (error) {
      console.error('Error updating like count', error);
    }
  };

  return (
    <StyledWrapper>
      <button className="container" onClick={handleLikeToggle}>
        <span className="effect orange_effect"></span>
        <span className="effect white_effect"></span>
        <div className="heart heart_left"></div>
        <div className="heart heart_right"></div>
        <div className="like">I love it</div>
      </button>
      <p className='like-count'>Likes: {likeCount}</p> 
    </StyledWrapper>
  );
};

export default Checkbox;
