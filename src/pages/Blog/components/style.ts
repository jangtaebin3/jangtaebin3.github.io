import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TabMenuContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  position: relative;
  background: none;
  border: none;
  padding: 8px 0;
  font-size: 16px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? '#000' : '#888')};
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`

export const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: #000;
  border-radius: 2px;
`

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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostDate = styled.span`
  color: #888;
`;