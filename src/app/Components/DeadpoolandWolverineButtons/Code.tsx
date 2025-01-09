import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper className='mt-10'>
      <div className="btn" >
        <button className="button face">
          <div className="deadpool-face">
            <div className="ded eye" />
          </div>
        </button>
        <button className="button1 face">
          <div className="wolverine-face">
            <div className="wol mask" />
            <div className="wol-eye" />
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    position: relative;
    width: 102px;
    height: 195px;
    border: none;
    border-radius: 9.5rem 0 0 10rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
  }

  .deadpool-face {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 170px;
    border: none;
    border-radius: 9.5rem 0 0 10rem;
    transition: all 0.5s ease;
    background: linear-gradient(
      90deg,
      #9d0000 5%,
      #af0000 10%,
      #cf0102 30%,
      #b10101 50%,
      #cf0102 70%,
      #c00101 80%,
      #c00101 95%
    );
    right: 0;
    box-shadow: inset 2px 0px 5px rgba(0, 0, 0);
  }

  .ded {
    position: absolute;
    background-color: #090b0c;
    border: none;
    width: 45px;
    height: 35px;
    left: 20px;
    clip-path: polygon(
      1% 1%,
      99% 59%,
      91% 73%,
      85% 81%,
      77% 89%,
      71% 94%,
      65% 98%,
      58% 99%,
      52% 99%,
      44% 98%,
      38% 97%,
      33% 92%,
      28% 85%,
      23% 75%
    );
    transition: all 0.5s ease;
  }

  .button1 {
    cursor: pointer;
    position: relative;
    width: 102px;
    height: 195px;
    border: none;
    border-radius: 0 9.5rem 10rem 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
  }

  .wolverine-face {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 170px;
    left: 0;
    border: none;
    border-radius: 0 9.5rem 10rem 0;
    box-shadow: inset 2px 0 5px rgba(0, 0, 0);
    background: linear-gradient(
      90deg,
      #fce620 5%,
      #ebd61d 10%,
      #f5e024 30%,
      #e6d31d 50%,
      #f5e024 70%,
      #ebd61d 80%,
      #fce620 95%
    );
    transition: all 0.5s ease;
  }

  .wol {
    position: absolute;
    border: none;
    background-color: transparent;
    box-shadow: none;
    width: 130px;
    height: 190px;
    bottom: 15px;
    right: -30px;
    transition: all 0.5s ease;
    clip-path: polygon(
      98% 1%,
      85% 15%,
      73% 28%,
      61% 38%,
      49% 46%,
      35% 50%,
      23% 54%,
      15% 57%,
      10% 66%,
      13% 78%,
      21% 86%,
      32% 87%,
      54% 83%,
      42% 100%,
      62% 89%,
      73% 85%,
      81% 73%,
      85% 63%,
      90% 40%,
      93% 28%
    );
  }

  .wol-eye {
    position: absolute;
    border: none;
    background-color: #090b0c;
    box-shadow: none;
    width: 45px;
    height: 35px;
    transition: all 0.5s ease;
    clip-path: polygon(
      1% 1%,
      99% 59%,
      91% 73%,
      85% 81%,
      77% 89%,
      71% 94%,
      65% 98%,
      58% 99%,
      52% 99%,
      44% 98%,
      38% 97%,
      33% 92%,
      28% 85%,
      23% 75%
    );
    transform: rotateY(180deg);
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
  }

  .btn:hover .button {
    background: linear-gradient(
      90deg,
      #9d0000 5%,
      #af0000 10%,
      #cf0102 30%,
      #b10101 50%,
      #cf0102 70%,
      #c00101 80%,
      #c00101 95%
    );
    box-shadow: 0px 0px 5px #9e1f35;
  }

  .btn:hover .button1 {
    background: linear-gradient(
      90deg,
      #fce620 5%,
      #ebd61d 10%,
      #f5e024 30%,
      #e6d31d 50%,
      #f5e024 70%,
      #ebd61d 80%,
      #fce620 95%
    );
    box-shadow: 0px 0px 5px #feff1e;
  }

  .btn:hover .deadpool-face {
    background: #090b0c;
    right: 8px;
    box-shadow: inset 5px 5px 8px rgba(0, 0, 0);
  }

  .btn:hover .wolverine-face {
    background: transparent;
    left: 8px;
    box-shadow: inset 2px 0 5px rgba(0, 0, 0);
  }

  .btn:hover .ded {
    background-color: #ececec;
  }

  .btn:hover .wol {
    background-color: #090b0c;
    width: 130px;
    height: 190px;
    bottom: 15px;
    right: -35px;
    transform: rotateY(0deg);
    clip-path: polygon(
      98% 1%,
      85% 15%,
      73% 28%,
      61% 38%,
      49% 46%,
      35% 50%,
      23% 54%,
      15% 57%,
      10% 66%,
      13% 78%,
      21% 86%,
      32% 87%,
      54% 83%,
      42% 100%,
      62% 89%,
      73% 85%,
      81% 73%,
      85% 63%,
      90% 40%,
      93% 28%
    );
  }

  .btn:hover .wol-eye {
    background-color: #ececec;
  }

  .btn:active .face:not(:hover) {
    filter: grayscale(1);
  }

  .btn:active .face:hover {
    transform: scale(1.1);
  }`;

export default Button;
