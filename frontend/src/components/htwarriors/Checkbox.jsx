import React, { useState, useEffect } from 'react';
import StyledWrapper from './StyledWrapper';
import axios from '../../utils/axiosConfig';

const Checkbox = ({ onLikeToggle }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBeating, setIsBeating] = useState(false);
  const [inProgress, setInProgress] = useState(false); 

  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const response = await axios.get('/htwarriors/count');
        setLikeCount(response.data.count);
      } catch (error) {
        console.error('Error fetching like count:', error);
      }
    };
    fetchLikeCount();
  }, []);

  const handleLikeToggle = async () => {
    if (inProgress) return;
    setInProgress(true);

 
    setIsLiked((prev) => !prev);
    setIsBeating(true);
    setTimeout(() => setIsBeating(false), 2000); 

    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));

    try {
      const action = isLiked ? 'decrement' : 'increment';
      const response = await axios.put('/htwarriors/updatecount', { action });

      setLikeCount(response.data.count);
      onLikeToggle(); 
    } catch (error) {
      console.error('Error updating like count:', error);

      setIsLiked((prev) => !prev);
      setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
    } finally {
      setInProgress(false); 
    }
  };

  return (
    <StyledWrapper>
      <div className='card'>
      <div
        className={`heart ${isLiked ? 'liked' : ''} ${isBeating ? 'beating' : ''}`}
        onClick={handleLikeToggle}
        title="Like"
      ></div>
      <p className="like-count">Likes: {likeCount}</p>
      </div>
    </StyledWrapper>
  );
};

export default Checkbox;
