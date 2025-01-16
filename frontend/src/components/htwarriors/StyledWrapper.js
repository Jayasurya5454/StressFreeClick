import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
.card {
    background-color: #f9f9f9;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 45px 40px; 
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    max-width: 250px;
    margin: 100px auto; 
    border: 1px solid hsl(231deg 28% 86%);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
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
    margin-top: 20px;
    font-size: 18px;
    font-weight:bold;
    color:hsl(231deg 28% 50%) ;
  }
`;

export default StyledWrapper;
