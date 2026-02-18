export type BlogCategory = 'all' | 'dev' | 'research' | 'book'

export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  category: 'dev' | 'research' | 'book'
  slug: string
  url?: string
  thumbnail?: string | null
  body?: string
}
