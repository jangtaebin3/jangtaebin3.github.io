import { motion } from 'framer-motion';
import { sectionVariants } from './AboutAnimations';

interface Props {
  children: React.ReactNode
}

export default function AnimatedSection({ children }: Props) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.section>
  )
}