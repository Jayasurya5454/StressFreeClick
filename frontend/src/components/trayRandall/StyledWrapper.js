import styled from "styled-components";
const StyledWrapper = styled.div`

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 175px;
  background-color: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 1em;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
  .card-container:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.comment-react {
    margin: 0;
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color:rgb(113, 192, 155);
    border-radius: 5px;
    scale: 1.5;
    width: 100px;
    
  }
  
  .comment-react button {
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    outline: none;
    cursor:pointer;
  }
  
  .comment-react button:after {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    left: -3px;
    top: -3px;
    background: linear-gradient(to bottom right, #3598f5, blue);
    border-radius: 50%;
    z-index: 0;
    transform: scale(0);
    filter: blur(10px);
  }
  
  .comment-react button svg {
    position: relative;
    z-index: 9;
  }
  
  .comment-react button.clicked:after {
    animation: ripple 0.6s ease-in-out infinite;
  }
  
  .comment-react button.clicked svg {
    animation: ripple2 1s ease-in-out infinite;
    fill: #f5356e;
  }
  
  .comment-react button.clicked svg path {
    stroke: #f5356e;
    fill: #f5356e;
  }
  
  .comment-react hr {
    width: 80%;
    height: 1px;
    background-color:rgb(43, 83, 184);
    margin: auto;
    border: 0;
  }
  
  .comment-react span {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 20px;
    font-weight: 600;
    color:rgb(11, 53, 160);
    padding-right: 10px;
    text-align: center;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
  
    100% {
      transform: scale(1.3);
      opacity: 0.3;
    }
  }
  
  @keyframes ripple2 {
    0% {
      transform: scale(0);
      opacity: 1;
    }
  
    100% {
      transform: scale(1.6);
      opacity: 1;
    }
  }`;
export default StyledWrapper;
  