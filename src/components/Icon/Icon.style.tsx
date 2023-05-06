import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  font-size: 0px;

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
