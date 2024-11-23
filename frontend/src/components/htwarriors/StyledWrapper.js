import styled from 'styled-components';

const StyledWrapper = styled.div`
  button {
    display: flex;
    background-color: #fff;
    position: relative;
    list-style: none;
    width: 80px;
    height: 80px;
    border-radius: 60px;
    cursor: pointer;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    transition: 0.5s;
    border: none;
  }

  button:active {
    scale: 1.2;
  }

  button:hover {
    width: 180px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0);
  }

  button::before {
    content: '';
    position: relative;
    inset: 0;
    border-radius: 50px;
    background: linear-gradient(45deg, var(--i), var(--j));
    opacity: 0;
    transition: 0.5s;
  }

  button:hover::before {
    opacity: 1;
  }

  button::after {
    content: '';
    position: relative;
    top: 10px;
    width: 100%;
    height: 100%;
    border-radius: 60px;
    background: linear-gradient(45deg, var(--i), var(--j));
    filter: blur(15px);
    transition: 0.5s;
    z-index: -1;
    opacity: 0;
  }

  button:hover::after {
    opacity: 0.5;
  }

  button svg {
    color: #777;
    width: 120px; /* Increased the width of the heart */
    height:120px; /* Increased the height of the heart */
    transition: 0.5s;
    transition-delay: 0.25s;
  }

  button:hover svg {
    transform: scale(0);
    color: #fff;
    transition-delay: 0s;
  }

  button span {
    position: absolute;
  }

  button .title {
    color: #fff;
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transform: scale(0);
    transition: 0.5s;
    transition-delay: 0s;
    font-weight: 600;
  }

  /* Add the hidden class to hide SVGs */
  .hidden {
    display: none;
  }
.like-count {
  
    margin-top:0px; /* Pushes the like count to the bottom */
    font-size: 16px;
    color: #333;
  }
  button:hover .title {
    transform: scale(1);
    transition-delay: 0.25s;
  }
`;

export default StyledWrapper;
