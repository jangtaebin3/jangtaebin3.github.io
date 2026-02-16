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
  border-radius: 16px;
  padding: 8px 16px;
  &:hover {
    opacity: 1;
    background-color: #f0f0f0;
  }
`;

export const PostListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  border-bottom: 1px solid #ddd;
  gap: 8px;
`;

export const PostTitle = styled.h3`
  margin: 0;
`;

export const PostDescription = styled.p`
  margin: 0;
`;

export const PostDate = styled.span`
  color: #888;
`;