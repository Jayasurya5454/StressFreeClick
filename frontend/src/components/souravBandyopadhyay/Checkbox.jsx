import React, { useState, useEffect } from 'react';
import StyledWrapper from './StyledWrapper';
import axios from '../../utils/axiosConfig';

const Checkbox = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isRotate,setIsRotate]=useState(false);
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
      setIsRotate(true);
      await axios.put('/souravbandyopadhyay/updatecount');
      setLikeCount((prev) => prev + 1);  
      setTimeout(()=>{
        setIsRotate(false);
      },1778)
    } catch (error) {
      console.error('Error updating like count', error);
      setIsRotate(false);
    }
  };

  return (
    <StyledWrapper isRotate={isRotate}>
		      <div className='card-container'>
          <div className='card'>
      <div className="cssload-main" onClick={handleLikeToggle}>
        <div className={`cssload-heart ${isRotate ? 'rotating': ''}`}>
          <span className={`cssload-heartL ${isRotate ? 'rotating': ''}`} ></span>
          <span className={`cssload-heartR ${isRotate ? 'rotating': ''}`}></span>
          <span className={`cssload-square ${isRotate ? 'rotating': ''}`}></span>
        </div>
        <div className={`cssload-shadow ${isRotate ? 'rotating': ''}`}></div>
      </div>
      <p className='like-count'>Likes: {likeCount}</p> 
      </div>
      </div>
    </StyledWrapper>
  );
};

export default Checkbox;
