import styled from 'styled-components';
const StyledWrapper = styled.div`
.like-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: none;
    border-radius: 50%;
    background: linear-gradient(145deg, #ff5252, #d50000);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-family: "Arial", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    width: 90px;
    height: 90px;
    position: relative;
    overflow: hidden;
  }
  
  .like-button:before {
    content: "\2764"; /* Heart Icon */
    font-size: 50px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease-in-out;
  }
  
  .like-button:hover {
    animation: heartBeat 0.6s infinite;
  }
  
  .like-button:hover:before {
    transform: translate(-50%, -50%) scale(1);
  }
  
  .like-button:active:after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  
  @keyframes heartBeat {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
`;
export default StyledWrapper;
