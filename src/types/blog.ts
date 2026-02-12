export type BlogCategory = 'all' | 'dev' | 'research' | 'book'

export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  category: Exclude<BlogCategory, 'all'>
  url?: string
}
