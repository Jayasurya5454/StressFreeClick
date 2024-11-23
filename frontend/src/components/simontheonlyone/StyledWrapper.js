import styled from 'styled-components';
const StyledWrapper = styled.div`
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 6em;
  height: 6em;
  border: none;
  border-radius: 1em;
  background: #ddd;
  box-shadow: 0 0 20px rgba(0, 0, 0, .4);
  cursor: pointer;
}
.like-count {
  
    margin-top:50px; /* Pushes the like count to the bottom */
    font-size: 16px;
    color: #333;
  }
.heart {
  width: 2.4em;
  height: 4.3em;
  border: none;
  border-radius: 10em;
  pointer-events: none;
}

.heart_left {
  background-color: rgb(252, 102, 56);
  box-shadow: 0 0 5px rgba(0, 0, 0, .4);
  transform: rotate(-38deg);
  margin-right: -16px;
  z-index: 2;
}

.heart_right {
  background-color: rgb(199, 81, 45);
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  transform: rotate(38deg);
  z-index: 1;
}

.container:hover > .heart_left {
  animation: like 450ms ease forwards;
}

@keyframes like {
  0% {
    margin-right: -16px;
  }

  25% {
    transform: rotate(0deg);
    margin-right: -32px;
  }

  50% {
    transform: rotate(-38deg);
    margin-right: -16px;
  }

  75% {
    transform: rotate(0deg);
    margin-right: -32px;
  }

  100% {
    transform: rotate(-38deg);
  }
}

.container:hover > .heart_right {
  animation: loke 450ms ease;
}

@keyframes loke {
  25% {
    transform: rotate(0deg);
    box-shadow: none;
  }

  50% {
    transform: rotate(38deg);
  }

  75% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(38deg);
  }
}

.orange_effect,
.white_effect {
  position: absolute;
  inset: 40.5%;
  border: none;
  border-radius: .2em;
  width: 1em;
  height: 1em;
  scale: 1;
  opacity: 1;
}

.orange_effect {
  background: rgba(255, 102, 55, .3);
  transition: scale 250ms linear, opacity 500ms linear 270ms;
}

.container:hover > .orange_effect {
  scale: 6;
  opacity: 0;
}

.white_effect {
  background: rgba(255, 134, 42, 0.3);
  transition: scale 280ms linear 200ms, opacity 500ms linear 270ms;
}

.container:hover > .white_effect {
  scale: 6;
  opacity: 0;
}

.like {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10em;
  min-height: 2.2em;
  background: #e5e5e5;
  box-shadow: 0 0 20px rgba(0, 0, 0, .15);
  font-size: 15px;
  letter-spacing: 3px;
  border: none;
  border-radius: .65em;
  pointer-events: none;
  scale: 0;
  opacity: 0;
}

.container:focus .like {
  animation: pop-up 400ms ease forwards;
}

@keyframes pop-up {
  0% {
    top: 0;
  }

  80%, 100% {
    top: -60px;
    scale: 1;
    opacity: 1;
  }
}`;
export default StyledWrapper;