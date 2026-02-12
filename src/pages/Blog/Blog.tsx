import * as S from './style';
import BlogHeader from './BlogHeader';
import { useState, useMemo } from 'react';
import TabMenu from './components/TabMenu';
import PostList from './components/PostList';
import type { BlogCategory, BlogPost } from '@/types/blog';

const Blog = () => {
  const [activeTab, setActiveTab] = useState<BlogCategory>('all')

  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'React 렌더링 구조 정리',
      description: 'Virtual DOM과 Reconciliation 정리',
      date: '2026-02-10',
      category: 'dev',
      url: 'https://velog.io/...'
    },
    {
      id: '2',
      title: 'DIP Lab 연구 정리 1',
      description: '이미지 처리 모델 실험 기록',
      date: '2026-02-01',
      category: 'research'
    },
    {
      id: '3',
      title: '몰입 - 칙센트미하이',
      description: '몰입의 심리학과 성장',
      date: '2026-01-20',
      category: 'book'
    }
  ]

  const filteredPosts = useMemo(() => {
    if (activeTab === 'all') return posts
    return posts.filter(post => post.category === activeTab)
  }, [activeTab, posts])

  return (
    <div>
      <BlogHeader />
      <TabMenu activeTab={activeTab} onChange={setActiveTab} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default Blog;