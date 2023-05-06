import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  > svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    svg {
      fill: palevioletred;
    }
  }
`;
