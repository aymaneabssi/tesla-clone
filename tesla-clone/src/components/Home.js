import React from 'react';
import Section from './Section';
import styled from 'styled-components';
const Home = () => {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order online for touchless delivery'
        bgImg='model-s.jpg'
        leftBtnText='Costum order'
        rightBtnText='Existing inventory'
      />

      <Section
        title='Model X'
        description='Order online for touchless delivery'
        bgImg='model-x.jpg'
        leftBtnText='Costum order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Model 3'
        description='Order online for touchless delivery'
        bgImg='model-3.jpg'
        leftBtnText='Costum order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Model Y'
        description='Order online for touchless delivery'
        bgImg='model-y.jpg'
        leftBtnText='Costum order'
        rightBtnText='Existing inventory'
      />
    </Container>
  );
};

export default Home;
const Container = styled.div``;
