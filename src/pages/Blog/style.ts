import styled from 'styled-components';

export const BlogContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;  
  padding: 0 20vw;
  gap: 32px;
`;

export const Container = styled.div`
  max-width: 720px;
  margin: 120px auto 80px;
  padding: 0 20px;
`

export const Header = styled.header`
  margin-bottom: 32px;
`

export const Category = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  color: #888;
`

export const Title = styled.h1`
  margin-top: 8px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.3;
`

export const Meta = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: #aaa;
`

export const Divider = styled.hr`
  margin: 32px 0;
  border: none;
  border-top: 1px solid #eee;
`

export const Content = styled.article`
  line-height: 1.8;
  font-size: 16px;

  p {
    margin-bottom: 16px;
  }
`

export const Footer = styled.div`
  margin-top: 48px;
`
