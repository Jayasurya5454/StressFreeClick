import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  .heart {
    
    height: 50px;
    width: 50px;
    background-color:green;
    transform: rotate(-45deg);
    position: relative;
    animation: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    display: inline-block;
  }

  .heart::before,
  .heart::after {
    content: "";
    height: 50px;
    width: 50px;
    background-color:green;
    border-radius: 50%;
    position: absolute;
  }

  .heart::before {
    top: -25px;
    left: 0px;
  }

  .heart::after {
    left: 25px;
    top: 0px;
  }

  /* Beating Animation */
  .heart.beating {
    animation: heartbeat 1s infinite;
  }

  .heart.liked {
    transform: scale(1.25) rotate(-45deg);
  }

  @keyframes heartbeat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    25% {
      transform: scale(1.1) rotate(-45deg);
    }
    50% {
      transform: scale(1.3) rotate(-45deg);
    }
    75% {
      transform: scale(1.1) rotate(-45deg);
    }
    100% {
      transform: scale(1) rotate(-45deg);
    }
  }

  .like-count {
    margin-top: 40px;
    font-size: 14px;
    color: #333;
  }
`;

export default StyledWrapper;
