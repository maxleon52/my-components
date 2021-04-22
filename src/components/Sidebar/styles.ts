import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  /* border: 2px solid green; */
  background: ${Colors.white};
  width: 300px;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  .logo {
    display: flex;
    align-items: center;
    padding-left: 15px;
    width: 100%;
    height: 100px;
    border-radius: 4px;

    h2 {
      color: black;
    }
  }
`;

export const Content = styled.div`
  /* border: 2px solid green; */
  width: 100%;
`;

export const Navigation = styled.ul`
  /* border: 2px solid red; */
  width: 100%;
  height: 100%;

  li + li {
    margin-top: 10px;
  }
`;

export const NavigationItem = styled.li`
  /* border: 2px solid blue; */
  width: 100%;
  padding-left: 15px;
`;
