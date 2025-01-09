import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (

    <StyledWrapper className='mt-24 ml-24'>
      <div className="wild-west-scene ">
        <button className="wild-west-button">
          <span className="wild-west-button__content">
            <svg className="wild-west-button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9.09 5H4v4.09L1 12l3 2.91V19h5.09L12 22l2.91-3H20v-5.09L23 12l-3-2.91V5h-5.09L12 2zm0 4.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
            </svg>
            <span className="wild-west-button__text">Duel</span>
          </span>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wild-west-scene {
    position: relative;

  }


  .wild-west-scene__center-focus {
  
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle at center,
      rgba(255, 248, 220, 0.3) 0%,
      rgba(255, 248, 220, 0.1) 50%,
      transparent 70%
    );
    border-radius: 50%;
    box-shadow: 0 0 100px 50px rgba(255, 248, 220, 0.1);
  }

  .wild-west-button {
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 15px 30px;
    font-size: 24px;
    color: #f1dabb;
    background: linear-gradient(45deg, #8b4513, #a0522d);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.3),
      inset 0 -5px 10px rgba(0, 0, 0, 0.2);
  }

  .wild-west-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
  }

  .wild-west-button:hover {
    transform: translate(-50%, -55%) scale(1.05);
    box-shadow:
      0 15px 30px rgba(0, 0, 0, 0.4),
      inset 0 -5px 10px rgba(0, 0, 0, 0.2);
  }

  .wild-west-button:active {
    transform: translate(-50%, -48%) scale(0.95);
    box-shadow:
      0 5px 10px rgba(0, 0, 0, 0.3),
      inset 0 -3px 5px rgba(0, 0, 0, 0.2);
  }

  .wild-west-button__content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wild-west-button__icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    fill: #f1dabb;
    transition: transform 0.3s ease;
  }

  .wild-west-button:hover .wild-west-button__icon {
    transform: rotate(360deg) scale(1.2);
  }

  .wild-west-button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: wild-west-button-shine 3s linear infinite;
  }

  @keyframes wild-west-button-shine {
    0% {
      background-position: 200% 50%;
    }
    100% {
      background-position: -200% 50%;
    }
  }`;

export default Button;
