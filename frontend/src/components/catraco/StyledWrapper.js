
import styled from 'styled-components';
const StyledWrapper = styled.div`
.heart-container {
    --heart-color: rgb(91, 173, 255);
    position: relative;
    width: 50px;
    height: 50px;
    transition: .3s;
  }
  
  .heart-container .checkbox {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
    cursor: pointer;
  }
  
  .heart-container .svg-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .heart-container .svg-outline,
          .heart-container .svg-filled {
    fill: var(--heart-color);
    position: absolute;
  }
  
  .heart-container .svg-filled {
    animation: keyframes-svg-filled 1s;
    display: none;
  }
  
  .heart-container .svg-celebrate {
    position: absolute;
    animation: keyframes-svg-celebrate .5s;
    animation-fill-mode: forwards;
    display: none;
    stroke: var(--heart-color);
    fill: var(--heart-color);
    stroke-width: 2px;
  }
  
  .heart-container .checkbox:checked~.svg-container .svg-filled {
    display: block
  }
  
  .heart-container .checkbox:checked~.svg-container .svg-celebrate {
    display: block
  }
  
  @keyframes keyframes-svg-filled {
    0% {
      transform: scale(0);
    }
  
    25% {
      transform: scale(1.2);
    }
  
    50% {
      transform: scale(1);
      filter: brightness(1.5);
    }
  }
  
  @keyframes keyframes-svg-celebrate {
    0% {
      transform: scale(0);
    }
  
    50% {
      opacity: 1;
      filter: brightness(1.5);
    }
  
    100% {
      transform: scale(1.4);
      opacity: 0;
      display: none;
    }
  }`;
export default StyledWrapper;
