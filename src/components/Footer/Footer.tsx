import { FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FooterWrapper, IconList, IconButton, Copyright } from './style'

const EMAIL = 'jangtaebin3@gmail.com'

const Footer = () => {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      alert('이메일이 복사되었습니다!')
    } catch {
      alert('복사에 실패했어요 😢')
    }
  }

  return (
    <FooterWrapper>
      <IconList>
        <IconButton
          as="a"
          href="https://github.com/jangtaebin3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={32} />
        </IconButton>

        <IconButton
          as="a"
          href="https://instagram.com/j_tae.b_0416"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={32} />
        </IconButton>

        <IconButton
          type="button"
          onClick={handleCopyEmail}
          aria-label="Copy email"
        >
          <MdEmail size={32} />
        </IconButton>
      </IconList>

      <Copyright>© 2026 Jang Taebin</Copyright>
    </FooterWrapper>
  )
}

export default Footer
