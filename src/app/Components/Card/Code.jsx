import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper className='mt-10 ml-4'>
      <div className="card">
        <div id="cardnewfilter"><p>NEW</p></div>
        <div id="cardbrightfilter" />
        <div id="cardtop">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fc6969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x={3} y={3} width={18} height={18} rx={2} />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M20.4 14.5L16 10 4 20" />
          </svg>
          <p>image</p>
        </div>
        <div id="cardbottom">
          <p id="cardbottomtitle">Product name</p>
          <p id="cardbottomprice">19,99$</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 250px;
    height: 325px;
    background: lightgrey;
    border-radius: 20px;
    box-shadow: -8px 8px 0px 5px rgb(50, 50, 50, 0.2);
    border: solid 2px white;
    overflow: hidden;
    position: relative;
    transition: all 0.5s ease;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transform: rotate(3deg) skewX(3deg);
  }

  #cardtop {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease;
    color: #fc6969;
  }

  #cardtop p {
    font-size: 20px;
    font-weight: 500;
    padding-left: 2px;
  }

  #cardbottom {
    width: 100%;
    height: 31%;
    border-end-start-radius: 20px;
    border-end-end-radius: 20px;
    background-color: white;
    font-weight: 500;
    font-size: 20px;
    padding: 10px;
    color: #fc6969;
    transition: all 0.2s ease;
  }

  #cardbottom hr {
    height: 3px;
    background-color: black;
  }

  #cardbottomtitle {
    margin-bottom: 10px;
  }

  #cardbottomprice {
    display: flex;
    justify-content: end;
    margin-top: 10px;
    border-top: 2px solid lightgrey;
  }

  #cardbrightfilter {
    width: 450px;
    height: 200px;
    background-color: rgb(255, 255, 255, 0.5);
    position: absolute;
    transform: rotate(-40deg) translateX(-15%) translateY(-160%);
    transition: all 0.5s ease;
    z-index: 1;
  }
  #cardnewfilter {
    width: 75px;
    height: 30px;
    border-radius: 25px;
    background-color: #fc6969;
    position: absolute;
    z-index: 2;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    font-weight: 500;
  }

  .card:hover {
    transform: translateY(-5%);
    box-shadow: 0px 20px 10px rgb(50, 50, 50, 0.2);
  }
  .card:hover #cardbrightfilter {
    transform: rotate(-42deg) translateX(-15%) translateY(-79%);
  }

  .card:active #cardtop {
    transform: scale(1.05);
  }

  .card:active #cardbottom {
    background-color: #fc6969;
  }

  .card:active #cardbottom {
    color: white;
  }

  .card:active #cardbottom hr {
    background-color: white;
  }`;

export default Card;
