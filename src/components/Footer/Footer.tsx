import { FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FooterWrapper, IconList, IconLink } from './style'

const Footer = () => {
  return (
    <FooterWrapper>
      <IconList>
        <IconLink
          href="https://github.com/jangtaebin3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={32} />
        </IconLink>

        <IconLink
          href="https://instagram.com/j_tae.b_0416"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={32} />
        </IconLink>

        <IconLink
          href="mailto:your-email@gmail.com"
          aria-label="Email"
        >
          <MdEmail size={32} />
        </IconLink>
      </IconList>

      <small>© 2026 Jang Taebin</small>
    </FooterWrapper>
  )
}

export default Footer
