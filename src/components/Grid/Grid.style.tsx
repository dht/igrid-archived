import styled from 'styled-components';

export const Wrapper = styled.div<{
  screenWidth: number;
  screenHeight: number;
}>`
  grid-template-columns: repeat(auto-fill, calc((100vw - 200px) / 120));
  grid-template-rows: repeat(auto-fill, calc(100vh / 48));
  background-size: 25px 25px;

  &.ignoreWindowWidth {
    grid-template-columns: repeat(
      auto-fill,
      calc((${(props) => props.screenWidth + 'px'} - 200px) / 120)
    );
  }
`;
