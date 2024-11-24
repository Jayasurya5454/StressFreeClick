import React, { useState, useEffect } from 'react';
import StyledWrapper from './StyledWrapper';
import axios from '../../utils/axiosConfig';

const Checkbox = () => {
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
  
    const fetchLikeCount = async () => {
      try {
        const response = await axios.get('/souravbandyopadhyay/count');
        setLikeCount(response.data.count);  
      } catch (error) {
        console.error('Error fetching like count', error);
      }
    };
    fetchLikeCount();
  }, []);

  const handleLikeToggle = async () => {
    try {
      await axios.put('/souravbandyopadhyay/updatecount');
      setLikeCount((prev) => prev + 1);  
    } catch (error) {
      console.error('Error updating like count', error);
    }
  };

  return (
    <StyledWrapper>
		      
      <div className="cssload-main" onClick={handleLikeToggle}>
        <div className="cssload-heart">
          <span className="cssload-heartL"></span>
          <span className="cssload-heartR"></span>
          <span className="cssload-square"></span>
        </div>
        <div className="cssload-shadow"></div>
      </div>
      <p className='like-count'>Likes: {likeCount}</p> 
    </StyledWrapper>
  );
};

export default Checkbox;
