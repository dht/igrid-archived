import styled from 'styled-components';

export const Wrapper = styled.div`
  bottom: 10px;
  right: 10px;
  background-color: rgba(30, 30, 30, 0.95);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: fixed;
`;

export const Header = styled.div`
  background-color: #111;
  height: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 5px 8px;

  .Icon-container {
    margin: 0 7px;
  }
`;
