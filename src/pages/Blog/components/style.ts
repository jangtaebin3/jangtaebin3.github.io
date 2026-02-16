import styled from 'styled-components';

export const TabMenuContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const TabButton = styled.button<{ active: boolean }>`
  border: none;
  background: none;
  font-weight: ${props => props.active ? 600 : 400};
  opacity: ${props => props.active ? 1 : 0.5};
  cursor: pointer;
`;