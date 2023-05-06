import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #555;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 10px;
  }
`;
