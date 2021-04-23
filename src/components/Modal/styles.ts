import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  /* opacity: 0.4; */
  z-index: 1;
  top: 0px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  background: #fff;
  border-radius: 10px;
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;

  :hover {
    background: #f5f5f5;
  }
`;
