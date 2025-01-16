import styled from 'styled-components';
const StyledWrapper = styled.div`

.card-container {
  display: flex;
  justify-content: top;
  align-items: center;
  flex-direction: column;
  width: 140px;
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

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 8em;
  height: 8em;
  border: none;
  border-radius: 1em;
  background: #f9f9f9;
  //box-shadow: 0 0 20px rgba(0, 0, 0, .4);
  cursor: pointer;
}
.like-count {
    margin-top: 5px;
    font-size: 18px;
    font-weight:bold;
    color:hsl(231deg 28% 50%) ;
}
.heart {
  width: 3.4em;
  height: 6.3em;
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

.container.clicked .heart_left {
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

.container.clicked .heart_right {
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

.container.clicked  .orange_effect {
  scale: 6;
  opacity: 0;
}

.white_effect {
  background: rgba(255, 134, 42, 0.3);
  transition: scale 280ms linear 200ms, opacity 500ms linear 270ms;
}

.container.clicked  .white_effect {
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