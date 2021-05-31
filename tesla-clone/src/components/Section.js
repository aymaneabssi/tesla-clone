import React from 'react';
import styled from 'styled-components';
const Section = ({ title, description, bgImg, leftBtnText, rightBtnText }) => {
  return (
    <Container bgImage={bgImg}>
      <ItemText>
        <h1> {title}</h1>
        <p>{description}</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>{leftBtnText}</LeftButton>
        <RightButton>{rightBtnText}</RightButton>
      </ButtonGroup>
      <DownArrow src={'/images/down-arrow.svg'}></DownArrow>
    </Container>
  );
};

export default Section;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  flex-grow: 1;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  border-radius: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  margin: 8px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animationDown infinite 1.5s;
  margin-bottom: 50px;
`;
