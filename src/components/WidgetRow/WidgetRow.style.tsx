import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #eee;
  padding: 5px 10px;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:nth-child(2n-1) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &.selected {
    background-color: rgba(255, 221, 159, 0.15);
  }
`;

export const Name = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`;

export const Dimensions = styled.div`
  color: gold;
  font-size: 11px;
`;

export const Description = styled.div`
  color: rgba(255, 255, 255, 0.35);
  font-size: 12px;
`;

export const Tags = styled.div``;
