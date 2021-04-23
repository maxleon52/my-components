import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  row-gap: 50px;
`;

export const Neumorphism = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;

  border-radius: 30px;
  background: #fff;
  -webkit-box-shadow: 5px 5px 19px #e9e9e9, -5px -5px 19px #ffffff;
  box-shadow: 5px 5px 19px #e9e9e9, -5px -5px 19px #ffffff;
  -webkit-transition: -webkit-box-shadow 0.8s ease-in-out;
  transition: -webkit-box-shadow 0.8s ease-in-out;
  -o-transition: box-shadow 0.8s ease-in-out;
  transition: box-shadow 0.8s ease-in-out;
  transition: box-shadow 0.8s ease-in-out, -webkit-box-shadow 0.8s ease-in-out;
  cursor: pointer;

  :hover {
    border-radius: 30px;
    -webkit-box-shadow: inset 13px 13px 26px #ebebeb,
      inset -13px -13px 26px #ffffff;
    box-shadow: inset 13px 13px 26px #ebebeb, inset -13px -13px 26px #ffffff;
  }
`;
