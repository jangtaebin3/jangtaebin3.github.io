import type { BlogPost } from '@/types/blog'

export const bookPosts: BlogPost[] = [
  {
    id: 'book-test-001',
    title: '독서 기록 테스트: 클린 코드',
    description: 'Book 탭 노출 확인을 위한 테스트 데이터입니다.',
    date: '2025-02-20T12:30:00.000Z',
    category: 'book',
    slug: 'book-test-clean-code',
    thumbnail: null,
    body: `### 독서 메모
클린 코드는 가독성과 유지보수성을 높이는 습관에 대한 책이다.

\`\`\`ts
const isClean = (code: string) => code.length > 0
\`\`\`
`
  }
]
