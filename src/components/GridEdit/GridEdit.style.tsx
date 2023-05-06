import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  border: ;
`;

export const Library = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 290px;
  height: 300px;
  pointer-events: none;

  > div {
    pointer-events: all;
  }
`;
