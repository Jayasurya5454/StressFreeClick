import styled from 'styled-components';

const StyledWrapper = styled.div`

.love-heart:before, #switch {
 display: none;
 justify-content: space-between;
 align-items: center;
}

.love-heart, .love-heart::after {
 border-color: hsl(231deg 28% 86%);
 border: 1px solid;
 border-top-left-radius: 100px;
 border-top-right-radius: 100px;
 width: 10px;
 height: 8px;
 justify-content: space-between;
 align-items: center;
 border-bottom: 0;
}

.round {
 position: absolute;
 z-index: 1;
 width: 8px;
 height: 8px;
 background: hsl(0deg 0% 100%);
 box-shadow: rgb(0 0 0 / 24%) 0px 0px 4px 0px;
 border-radius: 100%;
 left: 0px;
 bottom: -1px;
 transition: all 0.5s ease;
 animation: check-animation2 0.5s forwards;
}

.card {
  background-color: #f9f9f9;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 40px 20px; /* More padding to accommodate the heart */
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  max-width: 250px; /* Slightly larger to fit the heart */
  margin: 100px auto; /* Add vertical spacing */
  border: 1px solid hsl(231deg 28% 86%); /* Match border color with the heart */
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}

input:checked + label .round {
 transform: translate(0px, 0px);
 animation: check-animation 0.5s forwards;
 background-color: hsl(0deg 0% 100%);
}

@keyframes check-animation {
 0% {
  transform: translate(0px, 0px);
 }

 50% {
  transform: translate(0px, 7px);
 }

 100% {
  transform: translate(7px, 7px);
 }
}

@keyframes check-animation2 {
 0% {
  transform: translate(7px, 7px);
 }

 50% {
  transform: translate(0px, 7px);
 }

 100% {
  transform: translate(0px, 0px);
 }
}

.love-heart {
 box-sizing: border-box;
 position: relative;
 transform: rotate(-45deg) translate(-50%, -33px) scale(4);
 display: block;
 border-color: hsl(231deg 28% 86%);
 cursor: pointer;
 top: 0;
 margin-top : 20px;
margin-left : 30px;
margin-bottom : 0px;

}

input:checked + .love-heart, input:checked + .love-heart::after, input:checked + .love-heart .bottom {
 border-color: hsl(347deg 81% 61%);
 box-shadow: inset 6px -5px 0px 2px hsl(347deg 99% 72%);
}

.love-heart::after, .love-heart .bottom {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 border-color: hsl(231deg 28% 86%);
}

.love-heart::after {
 right: -9px;
 transform: rotate(90deg);
 top: 7px;
}
 
.like-count {
    margin-top: 20px; /* Align closer to the heart */
    font-size: 18px; /* Slightly larger font for visibility */
    font-weight: bold;
    color: hsl(231deg 28% 50%); /* Muted color matching the theme */
}

.love-heart .bottom {
 width: 11px;
 height: 11px;
 border-left: 1px solid;
 border-bottom: 1px solid;
 border-color: hsl(231deg 28% 86%);
 left: -1px;
 top: 5px;
 border-radius: 0px 0px 0px 5px;
}
`;

export default StyledWrapper;
