import velogPosts from '@/data/velogPosts.json'
import type { BlogPost } from '@/types/blog'
import { bookPosts } from '@/data/bookPosts'
import { researchPosts } from '@/data/researchPosts'

export const blogPosts: BlogPost[] = [
  ...(velogPosts as BlogPost[]),
  ...researchPosts,
  ...bookPosts
]
