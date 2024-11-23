import { useState, useEffect } from 'react';
import StyledWrapper from './StyledWrapper';
import axios from '../../utils/axiosConfig';

const Checkbox = () => {
  const [likeCount, setLikeCount] = useState(0); 
  const [isLiked, setIsLiked] = useState(false); 

 
  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const response = await axios.get('/barisdogonsutcu/count'); 
        setLikeCount(response.data.count);
      } catch (error) {
        console.error('Error fetching like count:', error);
      }
    };

    fetchLikeCount();
  }, []);

 
  const handleLike = async () => {
    if (!isLiked) { 
      try {
        const response = await axios.put('/barisdogonsutcu/updatecount'); // Backend route to increment count
        setLikeCount(response.data.count); 
        setIsLiked(true); 
      } catch (error) {
        console.error('Error updating like count:', error);
      }
    }
  };

  return (
    <StyledWrapper>
      <div className="love">
        <input
          id="switch"
          type="checkbox"
          checked={isLiked} 
          onChange={handleLike}
        />
        <label className="love-heart" htmlFor="switch">
          <i className="left"></i>
          <i className="right"></i>
          <i className="bottom"></i>
          <div className="round"></div>
        </label>
      </div>
      <p className='like-count'>Likes: {likeCount}</p> 
    </StyledWrapper>
  );
};

export default Checkbox;
