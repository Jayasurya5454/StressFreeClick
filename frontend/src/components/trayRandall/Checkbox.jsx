import React, { useState, useEffect } from 'react';
import StyledWrapper from './StyledWrapper';
import axios from '../../utils/axiosConfig';

const Checkbox = () => {
  const [likeCount, setLikeCount] = useState(0); 
  const [isChecked, setIsChecked] = useState(false); 

  useEffect(() => {
    
    const fetchLikeData = async () => {
      try {
        const response = await axios.get('/trayrandall/count');
        setLikeCount(response.data.count);
        setIsChecked(response.data.isChecked); 
      } catch (error) {
        console.error('Error fetching like count', error);
      }
    };

    fetchLikeData();
  }, []);

  const handleCheckboxChange = async () => {
    try {
      const action = isChecked ? -1 : 1; 
      const response = await axios.put('/trayrandall/updatecount', { action });
      
      
      setLikeCount(response.data.count);
      setIsChecked(!isChecked); 
    } catch (error) {
      console.error('Error updating like count', error);
    }
  };

  return (
    <StyledWrapper>
      <div className="comment-react">
        <button onClick={handleCheckboxChange}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
              stroke="#707277"
              strokeWidth="2"
              strokeLinecap="round"
              fill={isChecked ? '#f5356e' : '#FF69B5'} 
            ></path>
          </svg>
        </button>
        <span>{likeCount}</span>
      </div>
    </StyledWrapper>
  );
};

export default Checkbox;
