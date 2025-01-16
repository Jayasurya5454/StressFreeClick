import styled from 'styled-components';
const StyledWrapper = styled.div`
  
   
    .card {
    width: 150px;
    height: 185px;
    background-color: #f9f9f9;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
  }

  .cssload-main {
  
    position:relative;
    content: '';
    left: 28%;
    transform: translate(-100%, -240%);
    -o-transform: translate(-100%, -240%);
    -ms-transform: translate(-100%, -240%);
    -webkit-transform: translate(-100%, -240%);
    -moz-transform: translate(-100%, -240%);
  }

  .cssload-main * {
    font-size: 68px;
    cursor:pointer;
  }

  .cssload-heart {
    top:120px;
    left: 40%;
    position: absolute;
   
}
  
.cssload-heartL {
    width: 1em;
    height: 1em;
    border: 1px solid rgb(252, 0, 101);
    background-color: rgb(252, 0, 101);
    content: '';
    position: absolute;
    display: flex;
    justify-content: space-between;
    border-radius: 100%;
    transform: translate(-28px, -28px); /* Left part of the heart */
}

.cssload-heartR {
    width: 1em;
    height: 1em;
    border: 1px solid rgb(252, 0, 101);
    background-color: rgb(252, 0, 101);
    content: '';
    position: absolute;
    display: flex;
    justify-content: space-between;
    border-radius: 100%;
    transform: translate(28px, -27px); /* Right part of the heart */
}

.cssload-square {
    width: 1em;
    height: 1em;
    border: 1px solid rgb(252, 0, 101);
    background-color: rgb(252, 0, 101);
    position: relative;
    display: flex;
    justify-content: space-between;
    content: '';
    transform: scale(1) rotate(-45deg); /* Square rotated to form the heart base */
}

.cssload-shadow {
    top:210px;
    left: 40%;
    content: '';
    position: relative;
    display: block;
    bottom: -.5em;
    width: 1em;
    height: .24em;
    background-color: rgb(215, 215, 215);
    border: 1px solid rgb(215, 215, 215);
    border-radius: 50%;
}


  

  .cssload-heart.rotating {
  
    animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -o-animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -ms-animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -webkit-animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -moz-animation: cssload-heart 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    top: 120px;
    content: '';
    left: 40%;
    position: absolute;
  }

  .cssload-heartL.rotating {
   
    width: 1em;
    height: 1em;
    border: 1px solid rgb(252, 0, 101);
    background-color: rgb(252, 0, 101);
    content: '';
    position: absolute;
    display: flex;
    justify-content: space-between;
    border-radius: 100%;
    animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -o-animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -ms-animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -webkit-animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -moz-animation: cssload-heartL 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    transform: translate(-28px, -27px);
    -o-transform: translate(-28px, -27px);
    -ms-transform: translate(-28px, -27px);
    -webkit-transform: translate(-28px, -27px);
    -moz-transform: translate(-28px, -27px);
  }

  .cssload-heartR.rotating {
    width: 1em;
    height: 1em;
    border: 1px solid rgb(252, 0, 101);
    background-color: rgb(252, 0, 101);
    content: '';
    position: absolute;
    display: flex;
    justify-content: space-between;
    border-radius: 100%;
    transform: translate(28px, -27px);
    -o-transform: translate(28px, -27px);
    -ms-transform: translate(28px, -27px);
    -webkit-transform: translate(28px, -27px);
    -moz-transform: translate(28px, -27px);
    animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -o-animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -ms-animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -webkit-animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -moz-animation: cssload-heartR 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
  }

  .cssload-square.rotating {
    width: 1em;
    height: 1em;
    border: 1px solid rgb(252, 0, 101);
    background-color: rgb(252, 0, 101);
    position: relative;
    display: flex;
    justify-content: space-between;
    content: '';
    transform: scale(1) rotate(-45deg);
    -o-transform: scale(1) rotate(-45deg);
    -ms-transform: scale(1) rotate(-45deg);
    -webkit-transform: scale(1) rotate(-45deg);
    -moz-transform: scale(1) rotate(-45deg);
    animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -o-animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -ms-animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -webkit-animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -moz-animation: cssload-square 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
  }

  .cssload-shadow.rotating {
    top: 210px;
    left: 40%;
    content: '';
    position: relative;
    display: block;
    bottom: -.5em;
    width: 1em;
    height: .24em;
    background-color: rgb(215,215,215);
    border: 1px solid rgb(215,215,215);
    border-radius: 50%;
    animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -o-animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -ms-animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -webkit-animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    -moz-animation: cssload-shadow 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
  }

  @keyframes cssload-square {
    50% {
      border-radius: 100%;
      transform: scale(0.5) rotate(-45deg);
    }

    100% {
      transform: scale(1) rotate(-45deg);
    }
  }

  @-o-keyframes cssload-square {
    50% {
      border-radius: 100%;
      -o-transform: scale(0.5) rotate(-45deg);
    }

    100% {
      -o-transform: scale(1) rotate(-45deg);
    }
  }

  @-ms-keyframes cssload-square {
    50% {
      border-radius: 100%;
      -ms-transform: scale(0.5) rotate(-45deg);
    }

    100% {
      -ms-transform: scale(1) rotate(-45deg);
    }
  }

  @-webkit-keyframes cssload-square {
    50% {
      border-radius: 100%;
      -webkit-transform: scale(0.5) rotate(-45deg);
    }

    100% {
      -webkit-transform: scale(1) rotate(-45deg);
    }
  }

  @-moz-keyframes cssload-square {
    50% {
      border-radius: 100%;
      -moz-transform: scale(0.5) rotate(-45deg);
    }

    100% {
      -moz-transform: scale(1) rotate(-45deg);
    }
  }

  @keyframes cssload-heart {
    50% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(720deg);
    }
  }

  @-o-keyframes cssload-heart {
    50% {
      -o-transform: rotate(360deg);
    }

    100% {
      -o-transform: rotate(720deg);
    }
  }

  @-ms-keyframes cssload-heart {
    50% {
      -ms-transform: rotate(360deg);
    }

    100% {
      -ms-transform: rotate(720deg);
    }
  }

  @-webkit-keyframes cssload-heart {
    50% {
      -webkit-transform: rotate(360deg);
    }

    100% {
      -webkit-transform: rotate(720deg);
    }
  }

  @-moz-keyframes cssload-heart {
    50% {
      -moz-transform: rotate(360deg);
    }

    100% {
      -moz-transform: rotate(720deg);
    }
  }

  @keyframes cssload-heartL {
    60% {
      transform: scale(0.4);
    }
  }

  @-o-keyframes cssload-heartL {
    60% {
      -o-transform: scale(0.4);
    }
  }

  @-ms-keyframes cssload-heartL {
    60% {
      -ms-transform: scale(0.4);
    }
  }

  @-webkit-keyframes cssload-heartL {
    60% {
      -webkit-transform: scale(0.4);
    }
  }

  @-moz-keyframes cssload-heartL {
    60% {
      -moz-transform: scale(0.4);
    }
  }

  @keyframes cssload-heartR {
    40% {
      transform: scale(0.4);
    }
  }

  @-o-keyframes cssload-heartR {
    40% {
      -o-transform: scale(0.4);
    }
  }

  @-ms-keyframes cssload-heartR {
    40% {
      -ms-transform: scale(0.4);
    }
  }

  @-webkit-keyframes cssload-heartR {
    40% {
      -webkit-transform: scale(0.4);
    }
  }

  @-moz-keyframes cssload-heartR {
    40% {
      -moz-transform: scale(0.4);
    }
  }

  @keyframes cssload-shadow {
    50% {
      transform: scale(0.5);
      border-color: rgb(228,228,228);
    }
  }

  @-o-keyframes cssload-shadow {
    50% {
      -o-transform: scale(0.5);
      border-color: rgb(228,228,228);
    }
  }

  @-ms-keyframes cssload-shadow {
    50% {
      -ms-transform: scale(0.5);
      border-color: rgb(228,228,228);
    }
  }

  @-webkit-keyframes cssload-shadow {
    50% {
      -webkit-transform: scale(0.5);
      border-color: rgb(228,228,228);
    }
  }
.like-count {
  
   margin-top: 180px;
    font-size: 18px;
    font-weight:bold;
    color:hsl(231deg 28% 50%) ;
  }
  @-moz-keyframes cssload-shadow {
    50% {
      -moz-transform: scale(0.5);
      border-color: rgb(228,228,228);
    }
  }`;
  export default StyledWrapper;